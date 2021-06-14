
import { useMemo , useEffect , useState } from 'react';
import io  from 'socket.io-client';


export const useSocket = ( serverPath   )=>{ // por si algun dia el puerto es diferente , declaramos como parametro esta variable 


    //const socket = io.connect('http://localhost:8080');

    const socket = useMemo(() => io.connect (serverPath,{


        transports: ['websocket']



    }), [serverPath] );

    const [Online, setOnline] = useState(false)


    //   transports: ['websocket']



  useEffect(() => { // cuando el socket cambia, voy a disparar algo  / verificando cuando el dsocket este conectado 

    //console.log(socket);

    setOnline(socket.connected);
   

  
  
}, [socket])



useEffect(() => {


  socket.on('connect',()=>{ // si esta conectado lo colocamos como verdadero  // escuchando cuando nos connectamos 

      setOnline(

        true
      )


  })

}, [socket ])






useEffect(() => {


  socket.on('disconnect',()=>{// si esta conectado lo colocamos como verdadero   // escuchando cuando nos desconectam

      setOnline(

        false
      )


  })

}, [socket ])



        return{


            socket,
            Online




        }




}