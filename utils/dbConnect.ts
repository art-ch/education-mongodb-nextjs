import { connect } from 'mongoose';

const connection = {};

const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  connection.isConnected = db.connections[0].readyState;

  console.log(connection.isConnected);
};

export default connectDB;
