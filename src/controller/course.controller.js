const courseService = require('../services/course.service')

const findAll = async (req, res) => {
    const courses = await courseService.findAll()

    return res.status(201).json(courses)
}

module.exports = {findAll}