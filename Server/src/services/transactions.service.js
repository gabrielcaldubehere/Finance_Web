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

export async function updateTransaction(id, { description, category, amount, type, date }) {
  const sql = `
    UPDATE transactions
    SET description = ?, category = ?, amount = ?, type = ?, date = ?
    WHERE id = ?
  `;

  const params = [description, category, amount, type, date, id];
  const [result] = await db.query(sql, params);

  return { affectedRows: result.affectedRows };
}

export async function deleteTransaction(id) {
  const sql = 'DELETE FROM transactions WHERE id = ?';
  const [result] = await db.query(sql, [id]);
  return { affectedRows: result.affectedRows };
}

