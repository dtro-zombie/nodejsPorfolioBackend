var express = require("express");
var router = express.Router();
const authMiddleware = require('../middleware/auth.validate')


const authController = require('../controller/auth.controller')


router.post("/register",[authMiddleware.validateRegister, authMiddleware.handleValidationResult], authController.register)

router.post("/login",authController.login)


module.exports = router;
