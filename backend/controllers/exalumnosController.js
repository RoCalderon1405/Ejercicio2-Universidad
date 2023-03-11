const asyncHandler = require('express-async-handler');

const Exalumnos = require('../model/exalumnosModel')


const getExalumnos = asyncHandler(async (req, res) => {
    const exalumnos = await Exalumnos.find()
    res.status(200).json(exalumnos)
})

const setExalumnos = asyncHandler(async (req, res) => {

    const { Nombre, Edad, Email, Carrera, Facultad, Empleo, Puesto, Empresa, Estado } = req.body;

    if (!req.body.Nombre) {
        res.status(400)
        throw new Error('Por favor teclea el nombre del exalumno')
    }
    if (!req.body.Edad) {
        res.status(400)
        throw new Error('Por favor teclea la edad del exalumno')
    }
    if (!req.body.Email) {
        res.status(400)
        throw new Error('Por favor teclea el email del exalumno')
    }
    if (!req.body.Carrera) {
        res.status(400)
        throw new Error('Por favor teclea la carrera del exalumno')
    }
    if (!req.body.Facultad) {
        res.status(400)
        throw new Error('Por favor teclea la facultad donde estudió del exalumno')
    }
    if (!req.body.Empresa) {
        res.status(400)
        throw new Error('Por favor teclea la empresa donde labora el exalumno')
    }
    if (!req.body.Estado) {
        res.status(400)
        throw new Error('Por favor teclea el estado donde labora del exalumno')
    }


    const exalumnos = await Exalumnos.create({
        Nombre,
        Edad,
        Email,
        Carrera,
        Facultad,
        Empleo: {
            Puesto,
            Empresa,
            Estado
        }
    });

    res.status(201).json(exalumnos)
}) 

module.exports = {
    getExalumnos,
    setExalumnos
}