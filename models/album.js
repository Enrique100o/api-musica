const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    artista: {
        type: String,
        required: true
    },
    anio: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Album', albumSchema);