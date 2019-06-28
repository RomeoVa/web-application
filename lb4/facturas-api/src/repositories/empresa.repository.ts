import {DefaultCrudRepository} from '@loopback/repository';
import {Empresa, EmpresaRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmpresaRepository extends DefaultCrudRepository<
  Empresa,
  typeof Empresa.prototype.rfc,
  EmpresaRelations
> {
  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
  ) {
    super(Empresa, dataSource);
  }
}
