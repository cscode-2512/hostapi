const mongoose = require("mongoose");

// uri="mongodb+srv://chaitanyasharma2512:R69UZCazlGNvdC7f@cluster0.t2luqkz.mongodb.net/cluster0?retryWrites=true&w=majority";

const connectDB = (uri) => {
//   console.log("connect db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;