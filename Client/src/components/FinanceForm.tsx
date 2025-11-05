import React, { useState, useEffect } from "react";
import type { Finance } from "../types";

// Tipos de props
interface Props {
  onSubmit: (data: Finance) => void; // Llamada al agregar o editar
  editingFinance?: Finance | null; // Si se edita un registro
}

const FinanceForm: React.FC<Props> = ({ onSubmit, editingFinance }) => {
  // Estado del formulario
  const [form, setForm] = useState<Finance>({
    description: "",
    category: "",
    amount: 0,
    type: "ingreso",
    date: new Date().toISOString().split("T")[0], // Fecha actual por defecto
  });

  // Cuando cambia el registro a editar, cargamos sus datos
  useEffect(() => {
    if (editingFinance) setForm(editingFinance);
  }, [editingFinance]);

  // Manejo del cambio en inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    // Reiniciamos después
    setForm({
      description: "",
      category: "",
      amount: 0,
      type: "ingreso",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto mt-6 w-full flex flex-col gap-3"
    >
      <h2 className="text-2xl font-semibold text-center text-blue-600">
        {editingFinance ? "Editar Movimiento" : "Agregar Movimiento"}
      </h2>

      {/* Descripción */}
      <input
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
        className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      />

      {/* Categoría */}
      <input
        name="category"
        placeholder="Categoría"
        value={form.category}
        onChange={handleChange}
        required
        className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      />

      {/* Monto */}
      <input
        name="amount"
        type="number"
        placeholder="Monto"
        value={form.amount}
        onChange={handleChange}
        required
        className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      />

      {/* Tipo */}
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      >
        <option value="ingreso">Ingreso</option>
        <option value="egreso">Egreso</option>
      </select>

      {/* Fecha */}
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
      >
        {editingFinance ? "Guardar Cambios" : "Agregar"}
      </button>
    </form>
  );
};

export default FinanceForm;
