// ************ Require's ************
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { check, body } = require('express-validator');
const db = require('../database/models');

const Users = db.users;

let registerValidations = [
    check('name').isLength({
        min: 1
    }).withMessage('Olvidaste colocar tu nombre.'),
    check('lastName').isLength({
        min: 1
    }).withMessage('Olvidaste colocar tu apellido.'),
    check('adress').isLength({
        min: 1
    }).withMessage('Necesitamos tu domicilio para poder enviar tus compras.'),
    check('email').isEmail().withMessage('No es una casilla de correo válida.'),
    body('email').custom(value => {
        Users.findAll({
            where: {
                email: value
            }
        })
        return true;
    }).withMessage('El email ingresado ya se encuentra registrado.'),
    check('password').isLength({
        min: 6
    }).withMessage('La contraseña debe tener por lo menos 6 caracteres.'),
];

let loginValidations = [
    check('email').isEmail().withMessage('No es una casilla de correo válida.'),
    check('password').isLength({
        min: 6
    }).withMessage('La contraseña debe tener por lo menos 6 caracteres.'),
]

// Render + Process Register Form
router.get("/register", usersController.register);
router.post("/register", registerValidations, usersController.createUser);

// Render + Process Login Form
router.get("/login", usersController.userLogin);
router.post("/login", loginValidations, usersController.processLogin);

// Render All Users
router.get("/admin")

// Render + Process User Edit
router.get("/editUser", usersController.userEdit);
router.get("/editUser/?:idUser", usersController.userEdit);

// Verify user's session
router.get("/checkLogin", usersController.check);

module.exports = router;

