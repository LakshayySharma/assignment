const Student = require("../model/Student");
const nodemailer = require("nodemailer");
//-----------------------Find all students --------------------------
exports.getAllStudents = async (req, res) => {
  try {
    let students = await Student.find({});
    return res.status(200).json({
      msg: `${students.length} ${
        students.length > 1 ? "results" : "result"
      } found`,
      students,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

//---------------------------Find One student data --------------------------
exports.getOneStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    let student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({
        msg: "Student not found",
      });
    }
    return res.status(200).json({
      msg: "student found!",
      student,
    });
  } catch (error) {
    console.log(error);
  }
};

// ------------------------------Create a new student data ------------------------
exports.postStudentData = async (req, res) => {
  try {
    let student = await Student.findOne({ email: req.body.email });
    if (student) {
      return res.status(400).json({
        error: "Student Already Exists",
      });
    }
    student = new Student(req.body);
    await student.save();
    return res.status(201).json({
      msg: "Student saved successfully",
      student,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

//--------------------------------update a student data ---------------------------
exports.updateOneStudentData = async (req, res) => {
  try {
    let student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({
      msg: "Student data updated successfully",
      student,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

//-----------------------------------delete a student data ------------------------------
exports.deleteOneStudentData = async (req, res) => {
  try {
    let student = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Deleted data successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

//--------------------------------------Mail a student -------------------------------------------
const smtpTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  // secure: true,
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

exports.sendStudentMail = async (req, res) => {
  try {
    smtpTransport.verify((err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`server ready`);
      }
    });
    let student = await Student.findById(req.params.id);

    let sendResult = await smtpTransport.sendMail({
      from: `${process.env.EMAIL_SENDER}`,
      to: student.email,
      subject: "Heya!!",
      html: "<body><h1>Heya!!</h1><h4>How are you doing!</h4></body>",
    });
    console.log(sendResult);
    res.status(200).json({ success: true, sendResult });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
