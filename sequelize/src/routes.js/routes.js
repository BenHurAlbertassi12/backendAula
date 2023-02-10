const express = require('express');

const courseController = require('../controllers/course.controller');

const routers = express.Router();

routers.get('/', courseController.findAll);
// routers.put('/:id', courseController.updateCourse);
// routers.delete('/:id', courseController.removeCourse);
// routers.post('/', courseController.createCourse);

module.exports = routers;