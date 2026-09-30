const express = require('express');

const artistaRoutes = require('./routes/artistaRoutes');
const cancionRoutes = require('./routes/cancionRoutes');
const albumRoutes = require('./routes/albumRoutes');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/artistas', artistaRoutes);
app.use('/api/canciones', cancionRoutes);
app.use('/api/albumes', albumRoutes);

module.exports = app;