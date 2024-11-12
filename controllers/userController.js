import Usuario from '../models/Usuario.js'
const formularioLogin= (request, response) =>{
    response.render('auth/login',{
        autenticado: false,
        page: "Ingresa a la plataforma"
    })
}

const formularioRegister= (request, response) =>{
    response.render('auth/register',{
        page: "Crea una cuenta..."
    })
}

const registrar = (req, res) =>{
    console.log('Registrando...')
}

const formularioPasswordRecovery= (request, response) =>{
    response.render('auth/passwordRecovery',{
        page: "Recupera tu contraseña"
    })
}
const createNewUser=async(request,response)=>{
    await check('nombre_usuario').notEmpty().run(request)
    let resultado = validationResult(request)
    response.json(resultador.array());
console.log("registrando a nuevo usuario...");
console.log(request.body)
//Refistro a la base de datos
const newUser= await Usuario.create({
    name:request.body.nombre_usuario,
    email:request.body.correo_usuario,
    password:request.body.pass_usuario,
});
response.json(newUser);
}

export {formularioLogin, formularioRegister, registrar, formularioPasswordRecovery,createNewUser}
