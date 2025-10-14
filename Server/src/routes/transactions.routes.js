import express from 'express';
import { getTransactions } from '../controllers/transactions.controllers.js';
import { addTransaction } from '../controllers/transactions.controllers.js';



const router = express.Router();

// GET /api/transactions
router.get('/', getTransactions);

// POST /api/transactions
router.post('/', addTransaction);

export default router;

