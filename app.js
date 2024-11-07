// Importacion del protocolo HTTP para lanzamiento de servidor 
var http = require('http');

//crear instancia del servidor para lanzar el mensaje
var server = http.createServer();

// Funcoion que emite el mensaje Hola Mundo con un codigo de servicio 200
function mensaje(petic, resp){
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola Mundo');
    resp.end();
} 

function comandos(petic, resp){
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('<p>Hola Mundo 2</p>');
    resp.end();
}

// realizamos la peticion con el mensaje creado
server.on('request', comandos);

// esta atento al puerto indicadi para validar el resultado de la función
server.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
})