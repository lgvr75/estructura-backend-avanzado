// TODO: Necesitamos Express

/*
1.- importar Express
2.- crear app con Express
3.- usar app.listen para abrir puertos
*/


import express  from 'express';

const api = express();

api.listen(8000, ()=> {
    console.log('API corriendo en puerto 8000');
});