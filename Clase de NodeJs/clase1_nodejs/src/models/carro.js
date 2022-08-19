const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carroSchema = new Schema({
    
    placa: {
        type: String
    },
    marca: {
        type: String
    },
    modelo: {
        type: Number
    },
    color: {
        type: String
    },
    id_persona: {
        type: String
    }
}, {
    collection: 'carros'
});

module.exports = mongoose.model('Carro', carroSchema);