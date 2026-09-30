const mongoose = require('mongoose');

const app = require('./app');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/api_musica')
    .then(() => {
        console.log('Base de datos conectada correctamente');

        app.listen(app.get('port'), () => {
            console.log(
                `Servidor funcionando en http://localhost:${app.get('port')}`
            );
        });
    })
    .catch(error => {
        console.error('Error al conectar con MongoDB:', error);
    });


