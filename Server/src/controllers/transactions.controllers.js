import { getAllTransactions } from '../services/transactions.service.js';
import { createTransaction } from '../services/transactions.service.js';  


export const getTransactions = async (req, res) => {
  try {
    const data = await getAllTransactions();
    res.json(data);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Error al obtener transacciones', error });
  }
};

export const addTransaction = async (req, res) => {
    try {
        const { description, category, amount, type, date } = req.body;
        
        //Validacion basica
        if (!description || !category || !amount || !type || !date) {
            return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }

          // Crear la transaccion
        const newTransaction = await createTransaction({ description, category, amount, type, date });
        res.status(201).json({ message: 'Transacción creada', transaction: newTransaction });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Error al crear la transacción', error });
    }
};

