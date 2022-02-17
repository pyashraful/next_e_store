import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("allrady Connected");
    return;
  }

  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    console.log(connection.isConnected);
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
}

function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "development") {
      mongoose.disconnect();
      console.log("disconnect");
    } else {
      console.log("not disconnect");
    }
  }
}

const db = { connect, disconnect };
export default db;
