import Router from 'express';
import clientsController from '../controllers/clientsController';

const router = Router();

router
    .get('/', clientsController.index)
    .get('/create', clientsController.create)
    .post('/', clientsController.store)
    .get('/:id',clientsController.show)
    .get('/:id/edit', clientsController.edit)
    .put('/:id', clientsController.update)
    .delete('/:id', clientsController.destroy)

export default router;