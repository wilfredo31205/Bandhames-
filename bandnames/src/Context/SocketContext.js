import { createContext } from "react"
import { useSocket } from "../hooks/useSocket";





export const SocketContext = createContext();



export const SocketProvider = ({children})=>{


    const {socket , Online} = useSocket('http://localhost:8080');






    return(


        <SocketContext.Provider
        
        value={{socket, Online }}
        
        
        >

                 { children }




        </SocketContext.Provider>



    )






}