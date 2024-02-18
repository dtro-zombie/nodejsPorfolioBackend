// validationMiddleware.js
const { validationResult, body } = require('express-validator');

const validateRegister = [
    body('usuario')
      .notEmpty().withMessage('El nombre de usuario es obligatorio')
      .isLength({ min: 5 }).withMessage('El nombre de usuario debe tener al menos 5 caracteres'),
    body('email')
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('Ingrese un email válido'),
      body('claveRepetida').custom((value, { req }) => {
        if (value !== req.body.contrasena) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      })
  ];

const handleValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateRegister,
  handleValidationResult,
};
