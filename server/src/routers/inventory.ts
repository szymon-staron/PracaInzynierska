import { Router } from 'express';
import { InventoryController } from '../controllers';

const { addComment, addMeal, getAllMeals, getMealById } = InventoryController;

const router = Router();

router.get('/product', getAllMeals);
router.post('/product', addMeal);
router.post('/product/one', getMealById);
router.put('/product', addComment);

export = router;
