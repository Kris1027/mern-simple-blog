import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        author: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
