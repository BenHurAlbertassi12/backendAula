const { Course } = require('../models')

const findAll = async () => Course.findAll()
// const createCourse = async ({ name, description, creationDate, active, duration }) => {
//     createCourse.create
// }

module.exports = {
    findAll
}