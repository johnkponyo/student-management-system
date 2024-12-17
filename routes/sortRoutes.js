const express = require('express');
const router = express.Router();
const sortController = require('../controllers/sortController');
const { authenticateAll, authenticateInstructors } = require('../middlewares/authMiddleware');

// 1. GET /sort/students - Sort students based on a criterion (name, grade)
/**
 * @swagger
 * /sort/students:
 *   get:
 *     summary: Sort students based on a criterion
 *     description: Sort students based on a provided criterion such as name or grade.
 *     parameters:
 *       - name: sortBy
 *         in: query
 *         description: The criterion to sort students by (e.g., name, grade).
 *         required: true
 *         schema:
 *           type: string
 *           enum: [name, grade]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully sorted students based on the specified criterion
 *       400:
 *         description: Invalid sort criterion provided
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       500:
 *         description: Server error
 */
router.get('/students', authenticateInstructors, sortController.sortStudents);

// 2. GET /sort/courses - Sort courses based on a criterion (courseName)
/**
 * @swagger
 * /sort/courses:
 *   get:
 *     summary: Sort courses based on a criterion
 *     description: Sort courses based on a provided criterion such as course name.
 *     parameters:
 *       - name: sortBy
 *         in: query
 *         description: The criterion to sort courses by (e.g., courseName).
 *         required: true
 *         schema:
 *           type: string
 *           enum: [courseName]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully sorted courses based on the specified criterion
 *       400:
 *         description: Invalid sort criterion provided
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       500:
 *         description: Server error
 */
router.get('/courses', authenticateInstructors, sortController.sortCourses);

module.exports = router;
