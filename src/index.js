import app from './app'
import './database'

app.listen(app.get('puerto'))
console.log("Servidor express",app.get('puerto'))