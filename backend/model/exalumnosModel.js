const mongoose = require('mongoose');


const empleoSchema = mongoose.Schema({
    Puesto: {
        type: String,
        required: [true, 'Por favor ingresa el puesto que ocupa']
    },
    Empresa: {
        type: String,
        required: [true, 'Por favor ingresa la empresa en la que trabaja']
    },
    Estado: {
        type: String,
        required: [true, 'Por favor ingresa el Estado en el que labora']
    }
},
    {
        _id: false
    })

const exalumnosSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del exalumno']
    },
    Edad: {
        type: Number,
        required: [true, 'Por favor ingresa la edad del alumno']
    },
    Email: {
        type: String,
        required: [true, 'Por favor ingresa el email del alumno']
    },
    Carrera: {
        type: String,
        required: [true, 'Por favor ingresa la carrera que estudió el exalumno']
    },
    Facultad: {
        type: String,
        required: [true, 'Por favor ingresa la facultad en la que estudió el exalumno']
    },
    Empleo: {
        type: empleoSchema,
        required: true
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Exalumnos', exalumnosSchema)