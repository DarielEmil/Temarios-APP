const User = require('../models/User');

const iniciarSesion = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const usuario = await User.findOne({ email });

        if(!usuario) {
            console.log("USUARIO NO")
            return res.status(400).json({
                ok: false,
                msg: 'Revisa los datos ingresados'
            });
        }

        // Confirmar los passwords
        if(usuario.password !== password) {
            console.log("pass NO")

            return res.status(400).json({
                ok: false,
                msg: 'Revisa los datos ingresados',
            });
        }

        // Redireccionar al usuario a la ruta principal, pero mientras tanto mostramos "conectado" en consola
        console.log('Conectado');
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