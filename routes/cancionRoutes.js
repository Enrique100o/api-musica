const express = require('express');

const router = express.Router();

const cancionController = require('../controllers/cancionController');

router.get('/', cancionController.getCanciones);
router.get('/:id', cancionController.getCancion);
router.post('/', cancionController.createCancion);
router.put('/:id', cancionController.updateCancion);
router.delete('/:id', cancionController.deleteCancion);

module.exports = router;