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

const formularioPasswordRecovery= (request, response) =>{
    response.render('auth/passwordRecovery',{
        page: "Recupera tu contraseña"
    })
}

export {formularioLogin, formularioRegister, formularioPasswordRecovery}
