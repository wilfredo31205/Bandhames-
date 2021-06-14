

import React,{useContext,useEffect} from 'react'

//import {Chart } from 'chart.js';
  
//import { Chart  } from 'chart.js'

import Chart from 'chart.js/auto';

import  { SocketContext  } from '../Context/SocketContext';






export const BandChart = () => {


    const { socket } =useContext(SocketContext);




    // useEffect(() => {
          //setBands(data);
        //    socket.on('current-bands',(bands)=>{// si esta conectado lo colocamos como verdadero   , escuchando cualquier cambio que el servidor emita llamado current bands 
               
                //   console.log(bands);
                //   crearGrafica(bands); // llamando la funcion grafica, cuando yo ya tengo esa informacion  / mandandole las bandas como un argumento
                 
                // setBands( bands); // llamando a las bandas que vienen de este socket y colocando en el state, para llamarlass 
               
                // })
    //   
        //    
    //    }, [socket])

       useEffect(() => {
        let chart = '';
        // recibo la data de mi emisor server
        socket.on('current-bands', (bands) => {
            // Cada vez que se hagan cambios hay que destruir el canvas con la función destroy().
          if(chart) {
            chart.destroy()
          }
          chart = crearGrafica(bands);
        })
        return () => socket.off('current-bands');
      }, [ socket ])




      const crearGrafica = (bands = []) => {
        const ctx = document.getElementById('myChart');
        return new Chart(ctx, {
          type: 'bar',
          data: {
              labels: bands.map(band => band.name),
              datasets: [{
                  label: '# of Votes',
                  data: bands.map(band => band.votes),
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
            animation: false,
            indexAxis: 'y',
            beginAtZero: true
          }
      });
    }




      


      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
      



    return (
     
        <canvas id="myChart"></canvas>
     



     
    )
}
