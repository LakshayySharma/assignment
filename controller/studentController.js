const Student = require("../model/Student");

exports.getAllStudents = (req, res) => {
  try {
    console.log("success");
    res.json({
      msg: "All Students route",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getOneStudent = (req, res) => {
  try {
    console.log("success");
    res.json({
      msg: "get One student",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.postStudent = (req, res) => {
  try {
    console.log("success");
    res.json({
      msg: "post student",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateOneStudent = (req, res) => {
  try {
    console.log("success");
    res.json({
      msg: "update One student route",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.deleteOneStudent = (req, res) => {
  try {
    console.log("success");
    res.json({
      msg: "delete One route",
    });
  } catch (error) {
    console.log(error);
  }
};
