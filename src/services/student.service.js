const { Student, Course } = require('../models');

const getStudents = async () =>
    Student.findAll({
        // attributes: [['name', 'studentName'], 'email'],
        // where: { active: true },
        include: { model: Course, as: 'course'/* ,  attributes: ['name'] */ }
    });

module.exports = {
    getStudents,
};