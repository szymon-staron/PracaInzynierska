import { Router } from 'express';
import authRoutes from './auth';
import inventoryRoutes from './inventory';
import reviewRoutes from './review';
const router = Router();

router.use(authRoutes);
router.use(inventoryRoutes);
router.use(reviewRoutes);

export = router;
