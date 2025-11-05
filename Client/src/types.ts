// Definimos el tipo de dato que representa cada registro financiero
export interface Finance {
  id?: number; // Opcional porque al crear no se envía
  description: string;
  category: string;
  amount: number;
  type: "ingreso" | "egreso";
  date: string; // Formato ISO (YYYY-MM-DD)
}
