import { ICreateRegistrationDTO } from '@modules/registrations/dtos/ICreateRegistrationDTO';
import { IRegistrationsRepository } from '@modules/registrations/repositories/IRegistrationsRepository';
import { Repository } from 'typeorm';
import { FilterBuilder, IFilterQuery } from 'typeorm-dynamic-filters';

import { AppDataSource } from '@shared/infra/typeorm';

import { Registration } from '../models/Registration';

class RegistrationsRepository implements IRegistrationsRepository {
  private ormRepository: Repository<Registration>;

  constructor() {
    this.ormRepository =
      AppDataSource.getRepository<Registration>(Registration);
  }

  public async getTotal(): Promise<number> {
    const total = await this.ormRepository.count();

    return total;
  }

  public async create(data: ICreateRegistrationDTO): Promise<Registration> {
    const registration = this.ormRepository.create(data);

    await this.ormRepository.save(registration);

    return registration;
  }

  public async getAll(query: IFilterQuery): Promise<[Registration[], number]> {
    const filterQueryBuilder = new FilterBuilder(
      this.ormRepository,
      'registration',
    );

    const queryBuilder = filterQueryBuilder.build(query);

    const result = await queryBuilder.getManyAndCount();

    return result;
  }

  public async save(data: Registration): Promise<void> {
    await this.ormRepository.save(data);
  }

  public async findById(
    id: string,
    relations?: string[],
  ): Promise<Registration | undefined> {
    const registration = await this.ormRepository.findOne({
      where: { id },
      relations,
    });

    return registration;
  }

  public async delete(registration: Registration): Promise<void> {
    await this.ormRepository.remove(registration);
  }
}

export { RegistrationsRepository };
