const bcrypt = require('bcrypt');
const User = require('../models/User');

const registrarUsuario = async (req, res) => {
    const { name, lastName, username, email, password } = req.body
    console.log(req.body);

    try {
        // Validar que el usuario no exista y que el email no esté registrado
        const usuarioExistente = await User.findOne({ email });
        if(usuarioExistente) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const usuario = new User({
            name,
            lastName,
            username,
            email,
            password: hashedPassword
        });

        await usuario.save();

        // Redireccionar al usuario a la ruta principal, pero mientras tanto mostramos "registrado" en consola
        console.log('Registrado');
        return res.status(200).json({
            ok: true,
            msg: 'El usuario ha sido registrado con exito'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al registrar el usuario', error
        });
    }
}

module.exports = { registrarUsuario }