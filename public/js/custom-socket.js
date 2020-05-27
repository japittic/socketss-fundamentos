var socket = io();
socket.on('connect', function() {

    console.log('Conectado al servidor');
});
// Escuchar 
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});
// Enviar informacion
socket.emit('enviarMensaje', {
        usuario: 'jose',
        mensaje: 'Hola Mundo'
    },
    function(resp) {
        console.log('Servidor:', resp);
    }
);

socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor', mensaje);
});