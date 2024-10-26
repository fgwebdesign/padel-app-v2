require('dotenv').config();
const mongoose = require('mongoose');

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión exitosa a MongoDB.");
    process.exit(0);
  } catch (err) {
    console.error("Error al conectar con MongoDB:", err.message);
    process.exit(1);
  }
};

testConnection();