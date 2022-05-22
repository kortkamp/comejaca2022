import { Router } from 'express';

import { RegistrationsController } from '../controllers/RegistrationsController';
import {
  createRegistrationValidate,
  showRegistrationValidate,
  updateRegistrationValidate,
} from '../validations/registrations.validation';

const registrationsRoutes = Router();

const registrationsController = new RegistrationsController();

registrationsRoutes.post(
  '/',
  createRegistrationValidate,
  registrationsController.create,
);

registrationsRoutes.get('/', registrationsController.index);

registrationsRoutes.put(
  '/:id',
  updateRegistrationValidate,
  registrationsController.update,
);

registrationsRoutes.get(
  '/:id',
  showRegistrationValidate,
  registrationsController.show,
);

registrationsRoutes.get('/print/:id', registrationsController.print);

export { registrationsRoutes };
