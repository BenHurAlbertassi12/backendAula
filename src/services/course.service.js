const { Course } = require('../models');
const { Student } = require('../models');

const getCourses = async () => Course.findAll(
    {
        include: [
            { model: Student },
        ],
    },
);

const createCourse = async ({
    name,
    description,
    creationDate,
    active,
    duration,
}) => Course.create({ name, description, creationDate, active, duration });

const update = async (
    id,
    { name, description, creationDate, active, duration }
) => {
    const [qtdUpdated] = await Course.update(
        { name, description, creationDate, active, duration },
        {
            where: { id },
        },
    );
    return qtdUpdated > 0;
};

const removeCourse = async (id) => {
    const qtdRemoved = await Course.destroy({ where: { id } });

    return qtdRemoved > 0;
};

module.exports = {
    getCourses,
    createCourse,
    update,
    removeCourse,
};