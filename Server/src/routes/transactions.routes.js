import express from 'express';
import { getTransactions, addTransaction, updateTransactionController, deleteTransactionController } from '../controllers/transactions.controllers.js';



const router = express.Router();

// GET /api/transactions
router.get('/', getTransactions);

// POST /api/transactions
router.post('/', addTransaction);

// PUT /api/transactions/:id

router.put('/:id', updateTransactionController);

// DELETE /api/transactions/:id
router.delete('/:id', deleteTransactionController);


export default router;

