import { inject, injectable } from 'tsyringe';

import ErrorsApp from '@shared/errors/ErrorsApp';

import { IRegistration } from '../models/IRegistration';
import { IRegistrationsRepository } from '../repositories/IRegistrationsRepository';

interface IRequest {
  registrationId: string;
  // authUser: {
  //   id: string;
  //   role: string;
  // };
}
@injectable()
class ShowRegistrationService {
  constructor(
    @inject('RegistrationsRepository')
    private registrationsRepository: IRegistrationsRepository,
  ) {}
  public async execute({ registrationId }: IRequest): Promise<IRegistration> {
    const registration = await this.registrationsRepository.findById(
      registrationId,
    );

    if (!registration) {
      throw new ErrorsApp('Registration not found', 404);
    }

    return registration;
  }
}

export { ShowRegistrationService };
