import { injectable, inject } from 'tsyringe';
import { IFilterQuery } from 'typeorm-dynamic-filters';

import { IListResultInterface } from '@shared/dtos/IListResultDTO';

import { IRegistrationsRepository } from '../repositories/IRegistrationsRepository';

@injectable()
class ListRegistrationsService {
  constructor(
    @inject('RegistrationsRepository')
    private registrationsRepository: IRegistrationsRepository,
  ) {}

  public async execute(query: IFilterQuery): Promise<IListResultInterface> {
    const { page, per_page } = query;
    const [registrations, length] = await this.registrationsRepository.getAll(
      query,
    );

    const total = await this.registrationsRepository.getTotal();

    return {
      result: registrations,
      total_registers: total,
      total_filtered: length,
      page,
      per_page,
      total_pages: Math.ceil(length / per_page),
    };
  }
}

export { ListRegistrationsService };
