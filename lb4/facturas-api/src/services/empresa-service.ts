import {HttpErrors} from '@loopback/rest';
import {CredentialsEmpresa, EmpresaRepository} from '../repositories/empresa.repository';
import {Empresa} from '../models/empresa.model';
import {UserService, UserProfile} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {PasswordHasher} from './hash.password.bcryptjs';
import {PasswordHasherBindings} from "../key";
import {inject} from '@loopback/context';

export class MyUserService implements UserService<Empresa, CredentialsEmpresa> {
  constructor(
    @repository(EmpresaRepository) public userRepository: EmpresaRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) {}

  async verifyCredentials(credentials: CredentialsEmpresa): Promise<Empresa> {
    const foundUser = await this.userRepository.findOne({
      where: {rfc: credentials.rfc},
    });

    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `User with rfc ${credentials.rfc} not found.`,
      );
    }
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.contrasena,
      foundUser.contrasena,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('The credentials are not correct.');
    }

    return foundUser;
  }

  convertToUserProfile(user: Empresa): UserProfile {
    // since first name and lastName are optional, no error is thrown if not provided
    let userName = '';
    if (user.nombre) userName = `${user.nombre}`;
    if (user.razon_social)
      userName = user.razon_social
        ? `${userName} ${user.razon_social}`
        : `${user.razon_social}`;
    return {id: user.rfc, name: userName};
  }
}
