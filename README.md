Finance Web
Finance Web es una aplicación full stack para la gestión financiera personal. Incluye un backend (server) en Node.js + Express + MySQL y un frontend (client) en React + TypeScript, desplegados en la nube para demostrar un flujo completo de arquitectura moderna.

🚀 Tecnologías

Server (Backend)
- Node.js
- Express
- MySQL (Hostinger)
- Dotenv
- CORS
- Nodemon


Client (Frontend)
- React + Vite
- TypeScript
- TailwindCSS
- Axios


Deploy
- Backend: Render
- Frontend: Hostinger

📁 Estructura del proyecto
Código
finance-web/
├── server/
│   └── src/
│       ├── config/       # Configuración (DB, dotenv)
│       ├── controllers/  # Lógica de control
│       ├── routes/       # Rutas del API
│       ├── services/     # Lógica de negocio
│       ├── middleware/   # Middlewares personalizados
│       └── utils/        # Funciones auxiliares
│
├── client/
│   └── src/
│       ├── components/   # UI
│       │   ├── FinanceForm.tsx   # Formulario de transacciones
│       │   └── FinanceTable.tsx  # Tabla de ingresos/egresos
│       ├── services/     # Conexión API
│       │   └── api.ts
│       └── types.ts      # Tipado de datos financieros


🧠 Objetivo

Implementar un CRUD completo de ingresos y egresos.

Aplicar arquitectura en capas y tipado fuerte con TypeScript.

Conectar frontend y backend en la nube, mostrando datos en tiempo real.

Practicar despliegue profesional con Render y Hostinger.



Autor
** Gabriel Caldubehere **