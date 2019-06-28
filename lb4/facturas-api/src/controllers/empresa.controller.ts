import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Empresa} from '../models';
import {EmpresaRepository} from '../repositories';

export class EmpresaController {
  constructor(
    @repository(EmpresaRepository)
    public empresaRepository : EmpresaRepository,
  ) {}

  @post('/empresas', {
    responses: {
      '200': {
        description: 'Empresa model instance',
        content: {'application/json': {schema: {'x-ts-type': Empresa}}},
      },
    },
  })
  async create(@requestBody() empresa: Empresa): Promise<Empresa> {
    return await this.empresaRepository.create(empresa);
  }

  @get('/empresas/count', {
    responses: {
      '200': {
        description: 'Empresa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Empresa)) where?: Where<Empresa>,
  ): Promise<Count> {
    return await this.empresaRepository.count(where);
  }

  @get('/empresas', {
    responses: {
      '200': {
        description: 'Array of Empresa model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Empresa}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Empresa)) filter?: Filter<Empresa>,
  ): Promise<Empresa[]> {
    return await this.empresaRepository.find(filter);
  }

  @patch('/empresas', {
    responses: {
      '200': {
        description: 'Empresa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() empresa: Empresa,
    @param.query.object('where', getWhereSchemaFor(Empresa)) where?: Where<Empresa>,
  ): Promise<Count> {
    return await this.empresaRepository.updateAll(empresa, where);
  }

  @get('/empresas/{id}', {
    responses: {
      '200': {
        description: 'Empresa model instance',
        content: {'application/json': {schema: {'x-ts-type': Empresa}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Empresa> {
    return await this.empresaRepository.findById(id);
  }

  @patch('/empresas/{id}', {
    responses: {
      '204': {
        description: 'Empresa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() empresa: Empresa,
  ): Promise<void> {
    await this.empresaRepository.updateById(id, empresa);
  }

  @put('/empresas/{id}', {
    responses: {
      '204': {
        description: 'Empresa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() empresa: Empresa,
  ): Promise<void> {
    await this.empresaRepository.replaceById(id, empresa);
  }

  @del('/empresas/{id}', {
    responses: {
      '204': {
        description: 'Empresa DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.empresaRepository.deleteById(id);
  }
}
