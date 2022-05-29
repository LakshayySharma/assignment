const Student = require("../model/Student");
const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getOneStudent,
  deleteOneStudentData,
  postStudentData,
  updateOneStudentData,
  sendStudentMail,
} = require("../controller/studentController");

router.route("/").get(getAllStudents).post(postStudentData);

router
  .route("/:id")
  .get(getOneStudent)
  .put(updateOneStudentData)
  .delete(deleteOneStudentData);

router.route("/:id/sendMail").post(sendStudentMail);

module.exports = router;
