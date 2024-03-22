import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";


const register = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                msg: 'Correo o Contraseña Faltantes',

            })
        }

        const newPassword = await bcrypt.hash(req.body.password, 10);

        req.body.password = newPassword;

        const newUser = await User.create(req.body);
        return res.json({
            msg: 'Usuario Creado',
            user: newUser,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'error al registrar Usuario',
        })
    }

};

const login = async (req, res) => {
    if (!req.body.password || !req.body.email) {
        return res.status(400).json({
            msg: 'Bad Login',
        });
    }

    try {
        const user = await User.findOne({
            email: req.body.email,
        });

        if (!user) {
            return res.status(404).json({
                msg: 'Usuario no encontrado'
            });
        }


        const isPasswordCorrect = await bcrypt.compare(
            req.body.password, user.password
        );

        if (isPasswordCorrect) {
            const payload = {
                email: user.email,
                role: user.role,
            };

            const token = jwt.encode(payload, process.env.SECRET);
            return res.json({
                msg: 'login Correcto',
                token,
            })
        } else {
            return res.status(401).json({
                msg: 'Datos incorrectos'
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: 'usuario No registrado',
            error,
        })
    }



};

export { register, login };