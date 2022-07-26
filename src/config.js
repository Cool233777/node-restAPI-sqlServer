import {config} from 'dotenv'

config();

//console.log(process.env.PORT)

export default {
    port: process.env.PORT || 3000
}
/*
Basicamente configura el puerto al que se quiere conectar.
Podria usar el .env para declarar el puerto que desee.
*/