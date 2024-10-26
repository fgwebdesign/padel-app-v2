const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://fgwebdesign0:nqr2zA4lTrSzh68b@padelcluster.0srhz.mongodb.net/padelApp?retryWrites=true&w=majority';

async function run() {
  try {
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 30000, 
      tls: true, 
    });
    await client.connect();
    console.log("Conectado a MongoDB!");
    await client.close();
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
  }
}

run();