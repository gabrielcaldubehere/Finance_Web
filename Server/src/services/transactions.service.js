import db from '../config/db.js';

export async function getAllTransactions() {
    const [rows] = await db.query('SELECT id, description, category, amount, type, date FROM transactions');
    return rows;

}

export async function createTransaction({ description, category, amount, type, date }) {
    const sql = 'INSERT INTO transactions (description, category, amount, type, date) VALUES (?, ?, ?, ?, ?)';
    const params = [description, category, amount, type, date];
    const [result] = await db.query(sql, params);

    return { id: result.insertId };
    
}