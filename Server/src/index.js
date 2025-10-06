import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get ("/ping", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT 1 + 1 AS solution");
        res.json({ message: "✅ DB Conectada", solution: rows[0].solution });
    } catch (error) {

        res.status(500).json({ error: '❌ Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


