import { CreateRegistrationService } from '@modules/registrations/services/CreateRegistrationService';
import { ListRegistrationsService } from '@modules/registrations/services/ListRegistrationsService';
import { ShowRegistrationService } from '@modules/registrations/services/ShowRegistrationService';
import { UpdateRegistrationService } from '@modules/registrations/services/UpdateRegistrationService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { parseQueryFilters } from 'typeorm-dynamic-filters';

class RegistrationsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRegistrations = container.resolve(ListRegistrationsService);

    const registrations = await listRegistrations.execute(
      parseQueryFilters(request.query),
    );

    return response.json({ success: true, registrations });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createRegistration = container.resolve(CreateRegistrationService);

    const registration = await createRegistration.execute(request.body);

    return response.status(201).json({ success: true, registration });
  }

  // public async delete(request: Request, response: Response): Promise<Response> {
  //   const deleteRoleService = container.resolve(DeleteRoleService);

  //   const roleId = request.params.id;

  //   await deleteRoleService.execute(roleId);

  //   return response.status(204).json({ success: true });
  // }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateRegistration = container.resolve(UpdateRegistrationService);

    const registrationId = request.params.id;

    const data = request.body;

    const role = await updateRegistration.execute({ registrationId, data });

    return response.status(200).json({ success: true, role });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showRegistration = container.resolve(ShowRegistrationService);

    const registrationId = request.params.id;

    const role = await showRegistration.execute({ registrationId });

    return response.status(200).json({ success: true, role });
  }
}

export { RegistrationsController };
