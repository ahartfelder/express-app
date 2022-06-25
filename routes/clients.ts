import Router from 'express';
import clientsController from '../controllers/clientsController';

const router = Router();

router.get('/', clientsController.index);

router
    .route('/:id')
    .get(clientsController.show)

export default router;