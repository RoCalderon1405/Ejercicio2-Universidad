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

module.exports = mongoose.model('Empleo', empleoSchema);