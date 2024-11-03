import express from 'express';
import {
    deleteArticle,
    getArticles,
    postArticle,
    putArticle,
} from '../controllers/article.controller.js';

const router = express.Router();

router.get('/', getArticles);
router.post('/', postArticle);
router.put('/:id', putArticle);
router.delete('/:id', deleteArticle);

export default router;
