import * as control from '../services/service.js';


export const get_db = async (_req, res) => {
  try {
    const data = await control.getDB();
    res.json(data);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Error al obtener transacciones', error });
  }
};

export const add_db = async (req, res) => {
    try {
        const { description, category, amount, type, date } = req.body;
        
        //Validacion basica
        if (!description || !category || !amount || !type || !date) {
            return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }

          // Crear la transaccion
        const newTransaction = await control.createDB({ description, category, amount, type, date });
        res.status(201).json({ message: 'Transacción creada', transaction: newTransaction });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Error al crear la transacción', error });
    }
};

// Modificar transaccion 
export async function update_db(req, res) {
  try {
    const { id } = req.params;
    const { description, category, amount, type, date } = req.body;

    const result = await control.updateDB (id, { description, category, amount, type, date });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Transacción no encontrada' });
    }

    res.status(200).json({ message: 'Transacción actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar transacción', error });
  }
}

// Eliminar transaccion
export async function delete_db (req, res) {
  try {
    const { id } = req.params;
    const result = await control.deleteDB (id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Transacción no encontrada' });
    }

    res.status(200).json({ message: 'Transacción eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar transacción', error });
  }
}

