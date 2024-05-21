const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Registro de usuario
router.post('/register', register);

// Inicio de sesión de usuario
router.post('/login', login);

module.exports = router;
