import nodemailer from 'nodemailer';
const registerEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });

    const { email, name, token } = data;

    // Enviar el email
    await transport.sendMail({
        from: 'BienesRaices_230496',
        to: email,
        subject: 'Activa tu cuenta para comenzar a explorar propiedades...',
        text: `Hola ${name}, necesitamos que confirmes tu correo para completar el registro en BienesRaices_230496.`,
        html: `
            <header style="font-family: bold; text-align: center; line-height: 0.5;">
                <h2 style="color: #F2A359;">Bienes Raices</h2>
                <h3 style="color: #E05F0A;">Activación de cuenta</h3>
            </header>
            <div style="font-family: bold, sans-serif; text-align: justify; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 25px; border: 10px solid #F5B780; border-radius: 5px;">
                <h2 style="color: #D57840;">¡Bienvenido, ${name}!</h2>
                <div style="padding: 35px; border: dashed #F2A359; border-radius: 30px;">
                    <p style="font-size: 18px;">
                        Gracias por registrarte en <strong>BienesRaices_230499</strong>. Para completar tu registro y empezar a explorar nuestras propiedades, solo necesitas confirmar tu dirección de correo electrónico.
                    </p>
                    <div style="text-align: center; background: #F5B780; border: 1px solid #000000; padding: 15px;">
                        <p style="font-size: 20px;">
                            Haz clic en el siguiente botón para activar tu cuenta:
                        </p>
                        <div style="text-align: center; margin: 20px 0;">
                            <a href="${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT ?? 3000}/auth/confirm/${token}" 
                               style="background-color: #B02C00; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                               Activar Cuenta
                            </a>
                        </div>
                    </div>
                    <p style="font-size: 18px; color: #666;">
                        Si no realizaste este registro o no reconoces este correo, puedes ignorarlo sin problemas. ¡Gracias por elegirnos!
                    </p>
                    <div style="text-align: center; line-height: 1.6;">
                        <p style="font-size: 20px; color: #666;">
                            Atentamente, <br>
                            <strong>Edgar Cabrera Velazquez</strong>
                        </p>
                         <div style="margin-bottom: 15px;">
                            <img src="https://lh3.googleusercontent.com/pw/AP1GczNrm_cnN8j0NHCIsnCCYTVYF2QzvP9v7f8I8bLlA4ggQG1K02q0ZuYUu_iW2r7IYXm-CCasrLyUPNoixAKL-uvMPbhGoYeu51VOyna3JwRJ5-hI3YSHTRPZXE4OG4suDB9MSr4DKT_RfZlOGstkjRam=w278-h67-s-no-gm?authuser=0" alt="Firma" style="max-width: 150px; border-radius: 5px;">
                        </div>
                    </div>
                </div>
            </div>
            <footer style="text-align: center;">
                @Todos los derechos reservados de BienesRaices_230496
            </footer>
        `,
    });
};
const passwordRecoveryEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });

    const { email, name, token } = data;

    // Enviar el email
    await transport.sendMail({
        from: 'BienesRaices_230499',
        to: email,
        subject: '¿Olvidaste tu contraseña? Recuperala ahora...',
        text: `Hola ${name}, hemos recibido una solicitud para restablecer la contraseña de tu cuenta en BienesRaices_230496.`,
        html: `
            <header style="font-family: bold; text-align: center; line-height: 0.5;">
                <h2 style="color: #F2A359;">Bienes Raices</h2>
                <h3 style="color: #E05F0A;">Restablecimiento de contraseña</h3>
            </header>
            <div style="font-family: bold, sans-serif; text-align: justify; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 25px; border: 10px solid #F5B780; border-radius: 5px;">
                <h2 style="color: #50c878;">¡Hola, ${name}!</h2>
                <div style="padding: 35px; border: dashed #F2A359; border-radius: 30px;">
                    <p style="font-size: 18px;">
                        Hemos recibido tu solicitud para restablecer la contraseña de tu cuenta en <strong>BienesRaices_230499</strong>. Si no fuiste tú quien hizo la solicitud, por favor ignora este mensaje.
                    </p>
                    <div style="text-align: center; background: #F1FBFA; border: 1px solid #000000; padding: 15px;">
                        <p style="font-size: 20px;">
                            Haz clic en el siguiente enlace para restablecer tu contraseña:
                        </p>
                        <div style="text-align: center; margin: 20px 0;">
                            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirm/${token}" 
                               style="background-color: #F2A359; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                               Restablecer Contraseña
                            </a>
                        </div>
                    </div>
                    <p style="font-size: 18px; color: #666;">
                        Si no solicitaste este cambio, no tienes que hacer nada. Tu cuenta estará a salvo y no se realizará ningún cambio.
                    </p>
                    <div style="text-align: center; line-height: 1.6;">
                        <p style="font-size: 20px; color: #666;">
                            Atentamente, <br>
                            <strong>Edgar Cabrera Velazquez</strong>
                        </p>
                         <div style="margin-bottom: 15px;">
                            <img src="https://lh3.googleusercontent.com/pw/AP1GczNrm_cnN8j0NHCIsnCCYTVYF2QzvP9v7f8I8bLlA4ggQG1K02q0ZuYUu_iW2r7IYXm-CCasrLyUPNoixAKL-uvMPbhGoYeu51VOyna3JwRJ5-hI3YSHTRPZXE4OG4suDB9MSr4DKT_RfZlOGstkjRam=w278-h67-s-no-gm?authuser=0" alt="Firma" style="max-width: 150px; border-radius: 5px;">
                        </div>
                    </div>
                </div>
            </div>
            <footer style="text-align: center;">
                @Todos los derechos reservados de BienesRaices_230496
            </footer>
        `,
    });
};
export {registerEmail,passwordRecoveryEmail}