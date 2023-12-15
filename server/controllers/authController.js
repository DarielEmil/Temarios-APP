const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generarToken } = require('../util/authHelper');

const iniciarSesion = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const usuario = await User.findOne({ email });

        if(!usuario) {
            console.log("USUARIO NO")
            return res.status(400).json({
                ok: false,
                message: 'Revisa los datos ingresados'
            });
        }

        const passwordValido = await bcrypt.compare(password, usuario.password);

        // Confirmar los passwords
        if(!passwordValido) {
            console.log("pass NO")

            return res.status(400).json({
                ok: false,
                message: 'Revisa los datos ingresados',
            });
        }

        // Si las credenciales son válidas, generamos el token y lo enviamos en la respuesta
        const token = generarToken(usuario._id);

        return res.status(200).json({
            ok: true,
            token // Enviar el token como respuesta
        });

        // Redireccionar al usuario a la ruta principal, pero mientras tanto mostramos "conectado" en consola
        console.log("INICIADO")
        return res.redirect("/")

        router.get('/', verifyToken, (req, res) => {
            // Esta es tu ruta principal protegida
            res.json({ message: '¡Bienvenido a la ruta principal protegida!' });
        });

    } catch (error) {
        console.log("OTR")
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al iniciar sesión', error
        });
    }
}

module.exports = { iniciarSesion }