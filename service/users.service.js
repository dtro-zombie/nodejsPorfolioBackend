
const User = require('../models/usuario')


exports.createUser = async (usuario,email,claveHash) =>{
     await User.create({
        usuario,
        email,
        clave: claveHash
    });
}

