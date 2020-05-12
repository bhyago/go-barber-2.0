import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const provdersRouter = Router();
const providersController = new ProvidersController();

// ROTA: receber a requisição, chamar outro arquivo, devolver uma resposta.

provdersRouter.use(ensureAuthenticated);

provdersRouter.get('/', providersController.index);

export default provdersRouter;
