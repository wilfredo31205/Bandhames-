
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../Context/SocketContext';




// 
// export const BandList = ({data , votar , borrar , cambiarNombre}) => {


    export const BandList = () => {

    const [bands, setBands ] = useState([]);

    const { socket } = useContext(SocketContext)


    useEffect(() => {

     //   setBands(data);

        socket.on('current-bands',(bands)=>{// si esta conectado lo colocamos como verdadero   , escuchando cualquier cambio que el servidor emita llamado current bands 
            // 
              // console.log(bands);
              // 
               setBands( bands); // llamando a las bandas que vienen de este socket y colocando en el state, para llamarlass 
            // 

             })

             return ()=> socket.off('current-bands'); 


        
    }, [socket])


    const cambioNombre = (event , id )=>{

        
        const nuevoNombre = event.target.value;



        setBands(bands => bands.map(band =>{

            if(band.id === id){


                band.name = nuevoNombre;


            }

                return band;



        }) );

    }

        

        const onPerdioFoco = (id, nombre )=>{


            //console.log(id,nombre);
            socket.emit('cambiar-nombre-banda',{id , nombre }); // AUMENTANDO O LLAMANDO LOS VOTOS DEL
            // 
            //cambiarNombre(id , nombre);



        }



        const votar = (id)=> { //recibiendo el id de la banda que necesito votar 
 
 
            //console.log('Votar-app', id);
        
            socket.emit('votar-banda', id ); // AUMENTANDO O LLAMANDO LOS VOTOS DEL BACKEND
        
            // este socket, viene del context de useContext


         // 
       }



       const borrar = (id) => { //recibiendo el id de la banda que necesito votar 



        socket.emit('borrar-banda', id ); // AUMENTANDO O LLAMANDO LOS VOTOS DEL


        
      
      }






    const crearRows = ()=>{

        return(

            bands.map(band =>(

                    
            <tr key={band.id}  >


            <td>


            <button
             className="btn btn-primary"
             
             onClick={ ()=>votar(band.id)}
             
             
             
             >+1</button>




            </td>

                <td>
                <input
                
                className="form-control"
                value={band.name}

                onChange={(event) => cambioNombre (event ,  band.id )}
                
                onBlur={ ()=> onPerdioFoco(band.id, band.name)}
                
                
                
                
                />





                </td>


                <td> <h3> {band.votes} </h3> </td>

                <td>

                <button 
                
                
                className="btn btn-danger"
                
                onClick={() =>borrar(band.id)}
                
                
                >

                    Borrar

                </button>

                </td>


            </tr>



            ))




        );
    

}




    return (
        <>
            
        <table className="table table-striped">

        <thead>


        <tr>


        <th></th>
        <th>Nombre</th>
        <th>Votos</th>
        <th>Borrar</th>



        </tr>






        </thead>

        <tbody>

        { crearRows()}


        </tbody>



        </table>








        </>
    )
}
