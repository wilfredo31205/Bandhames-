

import React from 'react'

import {SocketProvider} from './Context/SocketContext';

import HomePage  from '../src/pages/HomePage';


export const BandnamesApp = () => {
    return (
        <SocketProvider>
            

            <HomePage />



        </SocketProvider>
    )
}
