import app from './app.js'

app.listen(app.get('port'))



console.log('servidor escuchando al puerto: ' + app.get('port'))