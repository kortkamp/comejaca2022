import { inject, injectable } from 'tsyringe';

// import ErrorsApp from '@shared/errors/ErrorsApp';

import { ICreateRegistrationDTO } from '../dtos/ICreateRegistrationDTO';
import { IRegistrationsRepository } from '../repositories/IRegistrationsRepository';

@injectable()
class CreateRegistrationService {
  constructor(
    @inject('RegistrationsRepository')
    private registrationsRepository: IRegistrationsRepository,
  ) {}

  public async execute(data: ICreateRegistrationDTO) {
    const role = await this.registrationsRepository.create(data);

    return role;
  }
}

export { CreateRegistrationService };
