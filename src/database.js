import mongoose from 'mongoose'

//conectamos a la base de datos asincrona - dentro de función anónima invocada
(async () => {
    const db = await mongoose.connect('mongodb://localhost/taskapi')
    console.log(db.connection.name);
})();
