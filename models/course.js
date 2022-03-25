
const{Schema, model} = require('mongoose');

const CourseSchema = new Schema({
    course_name: {
        type: String,
        required: [true,'el nombre es obligatorio'],
        unique: true
    },
    fecha_inicio: {
        type: Date,
        required: [true,'la fecha de inicio es obligatoria']
    },
    fecha_fin: {
        type: Date,
        required: [true,'la fecha de fin es obligatoria']
    },
});



module.exports = model('Course', CourseSchema);