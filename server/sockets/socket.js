const { io } = require('../server');


io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {

        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');

    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', {
                usuario: data.usuario,
                mensaje: data.mensaje
            })
            // if (mensaje.usuario) {
            //     callback({

        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio Mal'
        //     });
        // }

    });
});