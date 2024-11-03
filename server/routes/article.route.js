import express from 'express';
import { getArticles, postArticle } from '../controllers/article.controller.js';

const router = express.Router();

router.post('/', postArticle);
router.get('/', getArticles);

export default router;
