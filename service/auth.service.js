const bcrypt = require("bcrypt");

exports.encriptarContrasena = async(contrasena)=> {
    try {
      // Generar la sal
      const salt = await bcrypt.genSalt(10);
  
      // Generar el hash de la contraseña
      const hash = await bcrypt.hash(contrasena, salt);
  
      return hash;
    } catch (error) {
      console.error('Error al encriptar la contraseña:', error);
      throw error;
    }
  }