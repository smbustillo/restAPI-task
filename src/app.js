//usamos javascript moderno, para no tener problemas usamos Babel
import express from 'express'

//importar /routes
import IndexRoutes from '../routes/taskroutes'

//creando un servidor express muy básico
const app = express()

//configurar el puerto con express y usando variable de entorno
//se utilizará el puerto definido en la variable de entorno o en su defecto por el 3000
app.set('puerto',process.env.PORT || 3000);

//definimos la ruta principal
app.get('/',(req,res) => {
    res.json({message: 'Bienvenid@ a mi aplicación'})
})

app.use(IndexRoutes)

export default app;