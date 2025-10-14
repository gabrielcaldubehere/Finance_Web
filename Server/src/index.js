import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
import transactionsRoutes from './routes/transactions.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionsRoutes);


app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


