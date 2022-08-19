const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personaSchema = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    email: {
        type: String
    },
    telefono: {
        type: String
    },
    edad: {
        type: Number
    }, 
},    
    {
        collection: "personas" 
    }

);

module.exports = mongoose.model('Persona', personaSchema);