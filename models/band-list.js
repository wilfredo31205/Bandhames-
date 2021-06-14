const Band = require('./band');



class BandList {

    constructor(){




    this.bands = [

        new Band('The Beatles'),
        new Band('The Smith'),
        new Band('The Rolling Stone'),
        new Band('The Who'),


    ];


}

    addband(name){ // añadiendo bandas 


        const newBand = new Band(name);
        this.bands.push(newBand);
        return this.bands;


    }

    removeBand(id){ // eliminando banda 

        this.bands = this.bands.filter(band=>band.id !== id);


    }


    getBands(){ // retornando todas las bandas



        return this.bands;



    }


    increaseVotes(id){ // incrementando los votos por el id de la banda que quiero incrementar , vamos a buscar la banda por el id reccoriendolo con map  y a esa banda incremetarle un voto 



        this.bands = this.bands.map(band=>{


            if( band.id === id){ // si la banda .id es la que estoy recibiendo como argumento, significa que a esta banda es la que le tenemos que incrementar el voto


                band.votes +=1;


            }

                return band;





        })

    }
        // aqui 



         ChangeName(id, newName){ // incrementando los votos por el id de la banda que quiero incrementar , vamos a buscar la banda por el id reccoriendolo con map  y a esa banda incremet
            this.bands = this.bands.map(band=>{



                if( band.id === id){ // si la banda .id es la que estoy recibiendo como argumento, significa que a esta banda es la que le tenemos que incrementar el voto
                    
                    band.name = newName;




                }
                    return band;

            })

             }



}

module.exports = BandList;