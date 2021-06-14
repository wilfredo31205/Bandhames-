

import { useContext } from 'react';
import { BandAdd } from '../Components/BandAdd';

import {SocketContext} from '../Context/SocketContext';


import { BandList } from '../Components/BandList';

//import {useSocket} from '../hooks/useSocket';


import { BandChart  } from '../Components/BandChart';





//import io  from 'socket.io-client';


// const connectSocketServer = ()=>{ // este es nuestro socket 
// 
// 
  // const socket = io.connect('http://localhost:8080',{
// 
      // transports: ['websocket']
    // 
// 
// 
  // });
// 
    // return socket;
// 
// 
// }
// 

function HomePage() {



  //const [socket] = useState(connectSocketServer)
 // const [Online, setOnline] = useState(false)

 // const [bands, setbands] = useState([]);



  const { Online } = useContext(SocketContext); // obteniendo el Online o conectado del context 



  //const {socket , Online } =  useSocket('http://localhost:8080'); // importando el custom hook de useSocket, es decir pasandole el Socket y el Online a este componente principal desde useSocket 


// 
  // useEffect(() => { // cuando el socket cambia, voy a disparar algo  / verificando cuando el dsocket este conectado 
// 
     // console.log(socket);
// 
      // setOnline(socket.connected);
    // 
// 
    // 
    // 
  // }, [socket])
// 
// 
// 
  // useEffect(() => {
// 
// 
    // socket.on('connect',()=>{ // si esta conectado lo colocamos como verdadero  // escuchando cuando nos connectamos 
// 
        // setOnline(
// 
          // true
        // )
// 
// 
    // })
  // 
  // }, [socket ])
// 
// 
// 
// 
// 
// 
  // useEffect(() => {
// 
// 
    // socket.on('disconnect',()=>{// si esta conectado lo colocamos como verdadero   // escuchando cuando nos desconectamos 
// 
        // setOnline(
// 
          // false
        // )
// 
// 
    // })
  // 
  // }, [socket ])
// 
// 



  // useEffect(() => {
    // 
    // socket.on('current-bands',(bands)=>{// si esta conectado lo colocamos como verdadero   , escuchando cualquier cambio que el servidor emita llamado current bands 
        // 


          // console.log(bands);
          // 
          // setbands( bands); // llamando a las bandas que vienen de este socket y colocando en el state, para llamarlass 


        // 


    // })
  // 
  // }, [socket ])



  // const votar = (id)=> { //recibiendo el id de la banda que necesito votar 
// 
// 
      // console.log('Votar-app', id);
// 
      // socket.emit('votar-banda', id ); // AUMENTANDO O LLAMANDO LOS VOTOS DEL BACKEND
// 
// 
    // 
  // }
// 
// 
  // const borrar = (id) => { //recibiendo el id de la banda que necesito votar 
// 
// 
// 
    // socket.emit('borrar-banda', id ); // AUMENTANDO O LLAMANDO LOS VOTOS DEL
// 
// 
  // 
  // }
// 
// 
// 
   //const cambiarNombre = (id,nombre) => { //recibiendo el id de la banda que necesito votar 
// 
// 
// 
   //  socket.emit('cambiar-nombre-banda',{id , nombre }); // AUMENTANDO O LLAMANDO LOS VOTOS DEL
// 
// 
  // 
 // }
// 
// 
// 
  // const crearBanda = ( nombre )=>{
// 
// 
    // socket.emit('nueva-banda', {nombre  });
// 
// 
// 
// 
  // }
// 
// 

 





  return (
   
   <div className="container">


    <div className="alert">



    <p>Service status:



      {  
      
      Online 
      
      ?    <span className="text-success">Conectado</span> // si estas online vamos a mostrar esto 
      
      :  <span className="text-danger">Desconectado</span> // sino esta online , mostramos esto 
      
      
      
      }






 

   


    </p>

    </div>

    <h1 className="voto">Ven y vota por tu banda favorita </h1>

    <hr />
    

        <div className="row">


          <div className="col">

          < BandChart />





          </div>





        </div>






    <div className="row">

    <div className="col-8">


     <BandList 
     
     
      // data={bands}
      // votar={votar}
      // borrar={borrar}
      // cambiarNombre={cambiarNombre}
 
      // 
     
  
     />

    </div>


    <div className="col-4">


    <BandAdd
    
    
    //crearBanda={crearBanda }
    
    />

    </div>

    </div>


   </div>
   

   
   
   
   
   
  );
}

export default HomePage;
