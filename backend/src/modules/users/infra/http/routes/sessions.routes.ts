import { Router } from 'express';

import SessionsController from '../controllers/SessionsControllers';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

// ROTA: receber a requisição, chamar outro arquivo, devolver uma resposta.

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
