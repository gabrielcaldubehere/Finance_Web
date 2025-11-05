import React from "react";
import type { Finance } from "../types";

interface Props {
  finances: Finance[];
  onEdit: (item: Finance) => void;
  onDelete: (id: number) => void;
}

const FinanceTable: React.FC<Props> = ({ finances, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto mt-8 w-full flex justify-center">
      <table className="table-auto border-collapse shadow-lg rounded-2xl bg-white w-full max-w-4xl">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Descripción</th>
            <th className="p-2">Categoría</th>
            <th className="p-2">Monto</th>
            <th className="p-2">Tipo</th>
            <th className="p-2">Fecha</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {finances.length > 0 ? (
            finances.map((item) => (
              <tr key={item.id} className="text-center border-b hover:bg-gray-100">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.description}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">${item.amount}</td>
                <td
                  className={`p-2 font-semibold ${
                    item.type === "ingreso" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.type}
                </td>
                <td className="p-2">{item.date}</td>
                <td className="p-2 flex gap-2 justify-center">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(item.id!)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="p-4 text-gray-500">
                No hay registros aún.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceTable;
