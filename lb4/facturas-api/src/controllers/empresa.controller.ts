import {
  Count, CountSchema, Filter, repository, Where,
} from '@loopback/repository';
import {
  post, param, get, getFilterSchemaFor, getWhereSchemaFor,
  patch, put, del, requestBody, HttpErrors,
} from '@loopback/rest';
import {Empresa} from '../models';
import {EmpresaRepository} from '../repositories';
import {inject} from '@loopback/core';
import {
  authenticate,
  UserProfile,
  AuthenticationBindings,
  TokenService,
  UserService,
} from '@loopback/authentication';
import {CredentialsEmpresa} from '../repositories/empresa.repository';
import {PasswordHasher} from '../services/hash.password.bcryptjs';
import {validateCredentials} from '../services/validator';

import {
  TokenServiceBindings,
  PasswordHasherBindings,
  UserServiceBindings,
} from '../key';
import * as _ from 'lodash';

export class EmpresaController {
  constructor(
    @repository(EmpresaRepository) public userRepository: EmpresaRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: UserService<Empresa, CredentialsEmpresa>,
  ) {}

  @post('/empresas')
    async create(@requestBody() user: Empresa): Promise<Empresa> {
      // ensure a valid email value and password value
      validateCredentials(_.pick(user, ['correo', 'contrasena']));

      // encrypt the password
      user.contrasena = await this.passwordHasher.hashPassword(user.contrasena);

      try {
        // create the new user
        const savedUser = await this.userRepository.create(user);
        delete savedUser.contrasena;

        return savedUser;
      } catch (error) {
        // MongoError 11000 duplicate key
        if (error.code === 11000 && error.errmsg.includes('index: uniqueEmail')) {
          throw new HttpErrors.Conflict('Email value is already taken');
        } else {
          throw error;
        }
      }
    }

    @get('/empresas/{empresaId}', {
      responses: {
        '200': {
          description: 'Empresa',
          content: {
            'application/json': {
              schema: {
                'x-ts-type': Empresa,
              },
            },
          },
        },
      },
    })
    async findById(@param.path.string('empresaId') userId: string): Promise<Empresa> {
      return this.userRepository.findById(userId, {
        fields: {contrasena: false},
      });
    }

    @get('/empresas/me', {
      responses: {
        '200': {
          description: 'The current user profile',
          content: {
            'application/json': {
              schema: EmpresaProfileSchema,
            },
          },
        },
      },
    })
    @authenticate('jwt')
    async printCurrentUser(
      @inject(AuthenticationBindings.CURRENT_USER)
      currentUserProfile: UserProfile,
    ): Promise<UserProfile> {
      return currentUserProfile;
    }



    @post('/empresas/login', {
      responses: {
        '200': {
          description: 'Token',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  token: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    })
    async login(
      @requestBody(CredentialsRequestBody) credentials: CredentialsEmpresa,
    ): Promise<{token: string}> {
      // ensure the user exists, and the password is correct
      const user = await this.userService.verifyCredentials(credentials);

      // convert a User object into a UserProfile object (reduced set of properties)
      const userProfile = this.userService.convertToUserProfile(user);

      // create a JSON Web Token based on the user profile
      const token = await this.jwtService.generateToken(userProfile);

      return {token, user, userProfile};
    }
  }

  export const EmpresaProfileSchema = {
    type: 'object',
    required: ['id'],
    properties: {
      id: {type: 'string'},
      email: {type: 'string'},
      name: {type: 'string'},
    },
  };


  const CredentialsSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
        format: 'email',
      },
      password: {
        type: 'string',
        minLength: 8,
      },
    },
  };

  export const CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
      'application/json': {schema: CredentialsSchema},
    },
}
