import { Router } from 'express';

import { RegistrationsController } from '../controllers/RegistrationsController';

const registrationsRoutes = Router();

const registrationsController = new RegistrationsController();

registrationsRoutes.post('/', registrationsController.create);

registrationsRoutes.get('/', registrationsController.index);

registrationsRoutes.put('/:id', registrationsController.update);

registrationsRoutes.get('/:id', registrationsController.show);

registrationsRoutes.get('/print/:id', registrationsController.print);

export { registrationsRoutes };
