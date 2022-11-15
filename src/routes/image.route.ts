import { Router } from 'express';
import { create } from '../controllers/image.controller';

const router = Router();

router.post('/create', create);

export default router;
