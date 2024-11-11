const express= require(`express`); //declaración de objeto que permite entrar al protocolo http y leer páginas
//importar la libreria para crear un servidos web

//Instanciar nuestra aplicación web
const app=express()

//configuramos nuestro servidor web
const port= 3000; 
app.listen(port, ()=>{
    console.log(`La aplicación ha iniciado en el puerto: ${port}`);
})

// Probamos las rutas para poder presentar mensajes al usuario a traves del navegador
app.get("/", function(req, res){
    res.send("Hola Mundo desde Node, a través del Navegador");
})

app.get("/QuienSoy", function(req, res){
    res.json({"estudiante": "Edgar Cabrera Velázquez",
        "carrera": "TI DSM",
        "grado": "4°",
        "grupo": "B",
        "asignatura": "AWOS"
    })
})