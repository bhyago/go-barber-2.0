import { Router } from 'express';

import CreateUserService from '../services/CreateUserServices';

const usersRouter = Router();

// ROTA: receber a requisição, chamar outro arquivo, devolver uma resposta.

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
