const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/admin.controller');

router.route('/classrooms')
  .post(adminController.createClassroom)
  .get(adminController.getClassrooms);

router.route('/classrooms/:id')
  .patch(adminController.updateClassroom)
  .delete(adminController.deleteClassroom);

module.exports = router;
