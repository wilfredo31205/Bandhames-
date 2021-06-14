// Servidor de Express
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');

const Sockets  = require('./sockets');
//const io = require("socket.io")(server,{cors: {origin: "*" }});



class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );

        
 }


    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

        // CORS
        this.app.use( cors() );




             
     // Configuraciones de sockets
     this.io = socketio( this.server, {
         
        cors: {
            origin: "https://localhost:8080",
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true,
            transport : ['websocket','polling', 'flashsocket' ]
   
  
  
          }
         /* configuraciones */ } );
}
  
  



    // Esta configuración se puede tener aquí o como propieda de clase
    // depende mucho de lo que necesites
    configurarSockets() {
        new Sockets( this.io );
    }


     


    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        this.configurarSockets();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }

}

 




module.exports = Server;