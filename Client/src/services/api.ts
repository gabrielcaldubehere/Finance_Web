import axios from "axios";
import type { Finance } from "../types";

// Configuramos Axios con la URL base del backends
export const api = axios.create({
  baseURL: "https://finance-server-gd18.onrender.com/api/transactions", // Cambia si usás otro puerto
  headers: { "Content-Type": "application/json" },
});

// CRUD completo
export const getFinances = async () => {
  const res = await api.get("/");
  return res.data;
};

export const createFinance = async (data: Finance) => {
  const res = await api.post("/", data);
  return res.data;
};

export const updateFinance = async (id: number, data: Finance) => {
  const res = await api.put(`/${id}`, data);
  return res.data;
};

export const deleteFinance = async (id: number) => {
  await api.delete(`/${id}`);
};

export default api;
