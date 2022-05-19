import { IFilterQuery } from 'typeorm-dynamic-filters';

import { ICreateRegistrationDTO } from '../dtos/ICreateRegistrationDTO';
import { IRegistration } from '../models/IRegistration';

interface IRegistrationsRepository {
  create(data: ICreateRegistrationDTO): Promise<IRegistration>;
  getAll(query: IFilterQuery): Promise<[IRegistration[], number]>;
  findById(
    id: string,
    relations?: string[],
  ): Promise<IRegistration | undefined>;
  save(dataUpdate: IRegistration): Promise<void>;
  delete(registration: IRegistration): Promise<void>;
  getTotal(): Promise<number>;
}

export { IRegistrationsRepository };
