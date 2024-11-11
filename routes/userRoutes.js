import express from 'express';

const router = express.Router()

//GET
router.get("/busquedaPorID/:id", (request, response)=>{
    response.send(`Se esta solicitando buscar al usuario con ID: ${request.params.id}`)
})  //2 componentes de una petición - ruta -callback

//POST

//PUT

//PATCH




export default router;