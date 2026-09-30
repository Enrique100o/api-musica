const express = require('express');

const router = express.Router();

const artistaController = require('../controllers/artistaController');

router.get('/', artistaController.getArtistas);
router.get('/:id', artistaController.getArtista);
router.post('/', artistaController.createArtista);
router.put('/:id', artistaController.updateArtista);
router.delete('/:id', artistaController.deleteArtista);

module.exports = router;