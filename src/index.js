import app from './app.js'

app.listen(app.get('port'))//le decimos a la app que escuche en el puerto 3000



console.log('servidor escuchando al puerto: ' + app.get('port'))