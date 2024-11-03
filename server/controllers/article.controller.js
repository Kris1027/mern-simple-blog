import Article from '../models/article.model.js';

export const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({});
        res.status(200).json({
            success: true,
            message: 'Articles have been successfully fetched',
            data: articles,
        });
    } catch (error) {
        console.error(`Error while fetching articles: ${error}`);
        res.status(500).json({ success: false, message: 'Error while fetching articles' });
    }
};

export const postArticle = async (req, res) => {
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
};
