const Album = require('../models/album');

// Obtener todos los álbumes
exports.getAlbumes = async (req, res) => {
    try {
        const albumes = await Album.find();
        res.json(albumes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un álbum por ID
exports.getAlbum = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);

        if (!album) {
            return res.status(404).json({
                mensaje: 'Álbum no encontrado'
            });
        }

        res.json(album);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un álbum
exports.createAlbum = async (req, res) => {
    try {
        const album = new Album(req.body);
        await album.save();

        res.status(201).json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un álbum
exports.updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!album) {
            return res.status(404).json({
                mensaje: 'Álbum no encontrado'
            });
        }

        res.json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un álbum
exports.deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);

        if (!album) {
            return res.status(404).json({
                mensaje: 'Álbum no encontrado'
            });
        }

        res.json({
            mensaje: 'Álbum eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};