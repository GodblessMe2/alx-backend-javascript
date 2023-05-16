const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.route('/').get(AppController.getHomepage);
router.route('/students').get(StudentsController.getAllStudents);
router.route('/students/:major').get(StudentsController.getAllStudentsByMajor);

module.exports = router;
