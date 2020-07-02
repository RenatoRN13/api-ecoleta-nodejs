import express from 'express';
import cors from 'cors';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsControllers';

// index, show, create, update, delete
const routes = express.Router();
routes.use(cors())

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes;