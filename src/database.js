import mongoose from 'mongoose'
import config from './config'

//conectamos a la base de datos asincrona - dentro de función anónima invocada
(async () => {
    const db = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Conectado a la base de datos: ',db.connection.name);
})();
