const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000,
      tls: true,  // Asegura que se use TLS
    });
    console.log("MongoDB Conectado...");
  } catch (err) {
    console.error("Error al conectar con MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;