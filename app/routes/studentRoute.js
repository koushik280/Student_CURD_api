const express = require("express");
const router = express.Router();
const studentCtrl = require("../controller/StudentController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - age
 *         - grade
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the student
 *         name:
 *           type: string
 *           description: Student name
 *         age:
 *           type: number
 *           description: Student age
 *         grade:
 *           type: string
 *           description: Student grade
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the student was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the student was last updated
 *       example:
 *         name: John Doe
 *         age: 15
 *         grade: A
 */

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management endpoints
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Returns the list of all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: The list of students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
router.get("/", studentCtrl.getStudent);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: The student description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
router.get("/:id", studentCtrl.getStudentById);

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: The student was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Missing fields
 */
router.post("/", studentCtrl.createStudent);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update a student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The updated student
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
router.put("/:id", studentCtrl.updateStudent);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: Student removed
 *       404:
 *         description: Student not found
 */
router.delete("/:id", studentCtrl.deleteStudent);

module.exports = router;
