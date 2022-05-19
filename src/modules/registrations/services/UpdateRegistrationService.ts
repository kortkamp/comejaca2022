import { inject, injectable } from 'tsyringe';

import ErrorsApp from '@shared/errors/ErrorsApp';

import { ICreateRegistrationDTO } from '../dtos/ICreateRegistrationDTO';
import { IRegistrationsRepository } from '../repositories/IRegistrationsRepository';

interface IRequest {
  registrationId: string;
  data: Partial<ICreateRegistrationDTO>;
}

@injectable()
class UpdateRegistrationService {
  constructor(
    @inject('RegistrationsRepository')
    private registrationsRepository: IRegistrationsRepository,
  ) {}
  public async execute({ registrationId, data }: IRequest) {
    const role = await this.registrationsRepository.findById(registrationId);

    if (!role) {
      throw new ErrorsApp('Registration not found', 404);
    }

    Object.assign(role, data);

    await this.registrationsRepository.save(role);

    return role;
  }
}

export { UpdateRegistrationService };
