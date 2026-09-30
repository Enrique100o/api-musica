const mongoose = require('mongoose');

const cancionSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    artista: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    duracion: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cancion', cancionSchema);