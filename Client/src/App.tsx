import "./App.css";
import React, { useEffect, useState } from "react";
import type { Finance } from "./types";
import {
  getFinances,
  createFinance,
  updateFinance,
  deleteFinance,
} from "./services/api";
import FinanceForm from "./components/FinanceForm";
import FinanceTable from "./components/FinanceTable";

const App: React.FC = () => {
  const [finances, setFinances] = useState<Finance[]>([]);
  const [editing, setEditing] = useState<Finance | null>(null);

  // Carga inicial
  useEffect(() => {
    loadFinances();
  }, []);

  const loadFinances = async () => {
    const data = await getFinances();
    setFinances(data);
  };

  // Agregar o editar
  const handleSubmit = async (data: Finance) => {
    if (editing) {
      await updateFinance(editing.id!, data);
      setEditing(null);
    } else {
      await createFinance(data);
    }
    await loadFinances();
  };

  // Eliminar
  const handleDelete = async (id: number) => {
    await deleteFinance(id);
    await loadFinances();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mt-6 text-center">
        💼 Finanzas Personales
      </h1>

      <FinanceForm onSubmit={handleSubmit} editingFinance={editing} />

      <FinanceTable
        finances={finances}
        onEdit={(item) => setEditing(item)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
