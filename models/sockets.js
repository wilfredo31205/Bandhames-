
const Bandlist = require('./band-list');

class Sockets {

    constructor( io ) {

        this.io = io;


        this.bandlist = new Bandlist();



        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {


            console.log('Cliente Conectado');


                // Emtir  al cliente  conectado, todas las bandas actuales 

                socket.emit('current-bands',this.bandlist.getBands()); //current-bands es el mensaje a transmitir,  this.bandlist.getBands() : mandando a llamar el arreglo de bandas 


                // VOTAR POR LA BANDA

                socket.on('votar-banda', (id) =>{

                    this.bandlist.increaseVotes(id);
                   // socket.emit('current-bands',this.bandlist.getBands()) //this.io va a avisar a todos los clientes conectados, de algun cambio en la aplicacion  / 

                   // si yo emito socket.emit solo se lo emito al cliente que esta dispaerando este evento, si necesito que todos los clientes que hay algun cambio , utilizo tihs.io

                   this.io.emit('current-bands',this.bandlist.getBands()) //this.io va a avisar a todos los clientes conectados, de algun cambio en la aplicacion 

                })

 


                socket.on('borrar-banda', (id) =>{
                    this.bandlist.removeBand(id);
                  
                   
                   this.io.emit('current-bands',this.bandlist.getBands()) 
                })


                    // cambiar nombre a las bandas 
                socket.on('cambiar-nombre-banda', ({id , nombre}) =>{
                    this.bandlist.ChangeName(id, nombre);
                  
                   
                   this.io.emit('current-bands',this.bandlist.getBands()) 
                }) 



                    // crear una nueva banda
                socket.on('nueva-banda', ({ nombre}) =>{
                    this.bandlist.addband(nombre);
                  
                   
                   this.io.emit('current-bands',this.bandlist.getBands()) 
                }) 






           // Escuchar evento: mensaje-to-server
            // socket.on('mensaje-to-server', ( data ) => {
                // console.log( data );
                // 
                // this.io.emit('mensaje-from-server', data );
            // });
            // 
        
        });
    }


}


module.exports = Sockets;