//Protocolo de INtercambio
var http = require("http");
var server = http.createServer();

//SERVICIO WEB
function mensaje(req, resp) {
    //ESTADO SATISFACTORIO 200, 
    resp.writeHead(200, { 'Content-Type': 'text/plain' }); 
    resp.write('Hola Mundo'); 
    resp.end(); 
}

server.on('request' , mensaje);
server.listen(3000, function(){
    console.log('La solicitud fue realizasda mediante el puerto 3000, Bien hecho Kevin Teran')
});