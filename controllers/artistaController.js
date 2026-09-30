const Artista = require('../models/artista');

exports.getArtistas = async (req, res) => {
    try {
        const artistas = await Artista.find();
        res.json(artistas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArtista = async (req, res) => {
    try {
        const artista = await Artista.findById(req.params.id);

        if (!artista) {
            return res.status(404).json({ mensaje: 'Artista no encontrado' });
        }

        res.json(artista);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createArtista = async (req, res) => {
    try {
        const artista = new Artista(req.body);
        await artista.save();

        res.status(201).json(artista);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateArtista = async (req, res) => {
    try {
        const artista = await Artista.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!artista) {
            return res.status(404).json({ mensaje: 'Artista no encontrado' });
        }

        res.json(artista);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteArtista = async (req, res) => {
    try {
        const artista = await Artista.findByIdAndDelete(req.params.id);

        if (!artista) {
            return res.status(404).json({ mensaje: 'Artista no encontrado' });
        }

        res.json({ mensaje: 'Artista eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
