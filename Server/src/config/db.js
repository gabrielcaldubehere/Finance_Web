// src/config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Esto carga las variables de .env

const pool = mysql.createPool({
  host: process.env.DB_HOST,      // <--- DB_HOST
  user: process.env.DB_USER,      // <--- DB_USER
  password: process.env.DB_PASSWORD, // <--- DB_PASSWORD
  database: process.env.DB_NAME,     // <--- DB_NAME
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('DB_HOST:', process.env.DB_HOST);

export default pool;
