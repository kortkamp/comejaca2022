import path from 'path';
import { inject, injectable } from 'tsyringe';

import ITemplateProvider from '@shared/container/providers/TemplateProvider/models/ITemplateProvider';
import ErrorsApp from '@shared/errors/ErrorsApp';

import { IRegistrationsRepository } from '../repositories/IRegistrationsRepository';

interface IRequest {
  registrationId: string;
}
@injectable()
class PrintFichaService {
  constructor(
    @inject('RegistrationsRepository')
    private registrationsRepository: IRegistrationsRepository,

    @inject('TemplateProvider')
    private templateProvider: ITemplateProvider,
  ) {}
  public async execute({ registrationId }: IRequest): Promise<string> {
    const registration = await this.registrationsRepository.findById(
      registrationId,
    );

    if (!registration) {
      throw new ErrorsApp('Registration not found', 404);
    }

    const templateFile = path.resolve(__dirname, '..', 'views', 'ficha.hbs');

    // const link = `${process.env.CONFIRM_USER_URL}${userToken.token}`;

    const templateHTML = await this.templateProvider.parse({
      file: templateFile,
      variables: { ...registration },
    });

    return templateHTML;
  }
}

export { PrintFichaService };
