// /backend/server.js
require('dotenv').config();
console.log("Mongo URI:", process.env.MONGO_URI); // Debe mostrar la URI completa
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware para manejar JSON y CORS
app.use(express.json());
app.use(cors());

// Ruta básica para verificar si el servidor funciona
app.get('/', (req, res) => res.send('API funcionando'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
