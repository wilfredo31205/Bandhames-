

import React, { useContext, useState } from 'react';
import { SocketContext } from '../Context/SocketContext';
//import { useSocket } from '../hooks/useSocket';




export const BandAdd = () => {


    const [valor, setvalor] = useState('')

    const { socket } = useContext(SocketContext)

  //  const { socket } = useSocket('http://localhost:8080');

   


    const onSubmit = (e)=>{

        e.preventDefault();


  

        if(valor.trim().length > 0){
            // Todo llamar la funcion para emitir el evento 



            socket.emit('nueva-banda', {nombre : valor  });

                //crearBanda(valor);

                setvalor('');


        }







    }






    return (
        <>


        <h1>Agregar Banda de Rock </h1>


        <form
        

        onSubmit={onSubmit}



        
        >

        <input
        
            className="form-control"
            placeholder="Nuevo nombre de Banda"
            value={valor}
            onChange={(e) =>setvalor(e.target.value)}
        
        
        />




        </form>




            
        </>
    )
}

