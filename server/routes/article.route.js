import express from 'express';
import { getArticles, postArticle, putArticle } from '../controllers/article.controller.js';

const router = express.Router();

router.get('/', getArticles);
router.post('/', postArticle);
router.put('/:id', putArticle);

export default router;
