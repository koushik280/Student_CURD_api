const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection) {
      console.log("Database Connected");
    }
  } catch (err) {
    console.log("connection failed", err.message);
  }
};

module.exports = connectDb;
