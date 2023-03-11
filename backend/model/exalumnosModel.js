const mongoose = require('mongoose');
const Empleo = require('../model/empleoModel')


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
        type: Empleo.schema,
        required: true,
        ref: 'Empleo'
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Exalumnos', exalumnosSchema)