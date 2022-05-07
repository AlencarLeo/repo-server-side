import { Router } from 'express';

import auth from './middlewares/auth';

import UsersController from './controllers/UsersController';
import RepositoriesController from './controllers/RepositoriesController';
import SessionsController from './controllers/SessionsController';

const routes = new Router();

//CONTROLLERS PUBLICOS

routes.post('/sessions', SessionsController.create);

//MIDDLEWARE
routes.use(auth);

//CONTROLLERS PRIVADOS

// USER
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

//REPOSITORIES
routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.delete('/users/:user_id/repositories/:id', RepositoriesController.destroy);

export default routes;