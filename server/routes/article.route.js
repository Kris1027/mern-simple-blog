import express from 'express';
import Article from '../models/article.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const article = req.body;

    if (!article.title || !article.text || !article.author || !article.category) {
        return res.status(400).json({ success: false, message: 'Please fill in all the fields.' });
    }

    const newArticle = new Article(article);

    try {
        await newArticle.save();
        res.status(201).json({
            success: true,
            message: 'Article successfully created!',
            data: newArticle,
        });
    } catch (error) {
        console.error(`Server error ${error.message}`);
        res.status(500).json({ success: false, message: `Server Error ${error.message}` });
    }
});

export default router;
