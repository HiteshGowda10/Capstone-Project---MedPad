import { Router } from 'express';
import { getRecommendations, getProductsBySentiment } from '../controllers/recommendation.controller.js';

const router = Router();

router.get('/', getRecommendations);
router.get('/products-by-sentiment', getProductsBySentiment);

export default router;
