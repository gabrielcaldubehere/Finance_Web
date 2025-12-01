import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Esto carga las variables de .env

const pool = mysql.createPool({
  host: process.env.DB_HOST,      // <--- DB_HOST
  user: process.env.DB_USER,      // <--- DB_USER
  password: process.env.DB_PASSWORD, // <--- DB_PASSWORD
  database: process.env.DB_NAME,   
  port: process.env.DB_PORT,         // <--- DB_PORT
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

export default pool;
