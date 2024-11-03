import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server started at http://localhost:${PORT}/`);
});
