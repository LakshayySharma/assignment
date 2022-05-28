const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {}, () => {
      console.log(`Connected to mongodb server`);
    });
  } catch (error) {
    console.log(`error occurred: ${error}`);
  }
};

module.exports = connection;
