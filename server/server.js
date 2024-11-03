import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';
import articlesRouter from './routes/article.route.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/articles', articlesRouter);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, async () => {});
    } catch (error) {
        console.error(`Server startup error ${error.message}`);
        process.exit(1);
    }
};

startServer();
