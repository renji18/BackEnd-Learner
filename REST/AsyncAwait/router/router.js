const express = require('express')

const {
  getAllStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
  getSingleStudent,
} = require('../controllers/methods')

const router = express.Router()

router.route('/').get(getAllStudents).post(createNewStudent)
router.route('/:studentID').get(getSingleStudent).patch(updateStudent).delete(deleteStudent)

module.exports = router