//ECMa Script 6
//Comman16


import express from 'express';
import generalRoutes from './routes/generalRoutes.js'
import userRoutes from './routes/userRoutes.js'

//const express= require(`express`); //declaración de objeto que permite entrar al protocolo http y leer páginas
//importar la libreria para crear un servidos web

//Instanciar nuestra aplicación web
const app=express()

//Habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

//Definir la carpeta publica de recursos estáticos (assets)
app.use(express.static('public'));

//configuramos nuestro servidor web
const port= 3000; 
app.listen(port, ()=>{
    console.log(`La aplicación ha iniciado en el puerto: ${port}`);
})


//Routing - Enrutamiento
app.use('/',generalRoutes);
app.use('/auth/',userRoutes);

// Probamos las rutas para poder presentar mensajes al usuario a traves del navegador
