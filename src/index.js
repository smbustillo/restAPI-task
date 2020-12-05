import app from './app'

app.listen(app.get('puerto'))
console.log("Servidor express",app.get('puerto'))