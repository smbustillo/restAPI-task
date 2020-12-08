import {config} from 'dotenv'

//cargar variables entorndo de .env
config();


//Exporto la variable con un nombre más legible
export default {
    mongodbURL : process.env.MONGODB_URI
};