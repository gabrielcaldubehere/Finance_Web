CREATE DATABASE IF NOT EXISTS finance_db;
USE finance_db;

CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,  -- ✅ faltaba esto
  amount DECIMAL(10,2) NOT NULL,
  type ENUM('ingreso', 'egreso') NOT NULL,
  date DATE NOT NULL
);
