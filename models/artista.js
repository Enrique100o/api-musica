const mongoose = require('mongoose');

const artistaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Artista', artistaSchema);