const Cancion = require('../models/cancion');

// Obtener todas las canciones
exports.getCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.find();
        res.json(canciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una canción por ID
exports.getCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findById(req.params.id);

        if (!cancion) {
            return res.status(404).json({
                mensaje: 'Canción no encontrada'
            });
        }

        res.json(cancion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una canción
exports.createCancion = async (req, res) => {
    try {
        const cancion = new Cancion(req.body);
        await cancion.save();

        res.status(201).json(cancion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una canción
exports.updateCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!cancion) {
            return res.status(404).json({
                mensaje: 'Canción no encontrada'
            });
        }

        res.json(cancion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una canción
exports.deleteCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndDelete(req.params.id);

        if (!cancion) {
            return res.status(404).json({
                mensaje: 'Canción no encontrada'
            });
        }

        res.json({
            mensaje: 'Canción eliminada correctamente'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};