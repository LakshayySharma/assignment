const Student = require("../model/Student");
const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getOneStudent,
  deleteOneStudent,
  postStudent,
  updateOneStudent,
} = require("../controller/studentController");

router.route("/").get(getAllStudents).post(postStudent);
router
  .route("/:id")
  .get(getOneStudent)
  .put(updateOneStudent)
  .delete(deleteOneStudent);

module.exports = router;
