const express = require('express');
const morgan = require('morgan');
const app = express();

//requiriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api');

//settings
app.set('appName', 'My first server');
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(function(req, res, next) {
    console.log('request url:'+ req.url);
    next();
});

app.use((req, res, next)=> {
    console.log('ha pasado por esta función');
    next();
})

//rutas
app.use(routes);
app.use('/api', routesApi);


app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
})

app.listen(3000, () =>{
    console.log('servidor funcionando');
    console.log('Nombre de la App: ', app.get('appName'));
});
