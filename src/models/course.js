
const CourseSchema = (sequelize, DataTypes) => {
    const CourseTable = sequelize.define('Course', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        creation_date: DataTypes.DATE,
        active: DataTypes.BOOLEAN,
        duration: DataTypes.INTEGER
    }, {
        tableName: 'courses',
        underscored: true
    })


    CourseTable.associate = ({ Student }) => {
        CourseTable.hasMany(Student, {
            foreignKey: 'id_course'
        })
    }

    return CourseTable;
};


module.exports = CourseSchema