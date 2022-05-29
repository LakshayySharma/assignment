const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  favouriteSubject: {
    type: String,
  },
});

module.exports = Student = mongoose.model("student", studentSchema);
