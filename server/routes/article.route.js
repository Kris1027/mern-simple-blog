import express from 'express';
import { postArticle } from '../controllers/article.controller.js';

const router = express.Router();

router.post('/', postArticle);

export default router;
