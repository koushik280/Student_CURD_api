const Student = require("../model/StudentSchema");

class StudentController {
  //get all the student
  async getStudent(req, res) {
    try {
      const students = await Student.find(); // fetch all students from DB
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //Get a single student by ID
  async getStudentById(req, res) {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //Create a new student
  async createStudent(req, res) {
    try {
      const { name, age, grade } = req.body;

      // Basic validation (could also be done via mongoose schema)
      if (!name || !age || !grade) {
        return res.status(400).json({ message: "Please provide all fields" });
      }

      const student = await Student.create({ name, age, grade });
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //update student
  async updateStudent(req, res) {
    try {
      const {id }= req.params;
      const { name, age, grade } = req.body;
      const student = await Student.findById(id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      student.name = name || student.name;
      student.age = age || student.age;
      student.grade = grade || student.grade;

      const updatedStudent = await student.save();
      res.status(200).json(updatedStudent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteStudent(req, res) {
    try {
      const { id } = req.params;

      const student = await Student.findById(id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      await student.deleteOne(); // remove from DB
      res.status(200).json({ message: "Student removed" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new StudentController();
