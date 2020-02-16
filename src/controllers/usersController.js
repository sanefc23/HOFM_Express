const bcrypt = require('bcrypt');
const fs = require('fs');
const { validationResult } = require('express-validator');


const usersDir = 'data/users.json';
let readUsers = fs.readFileSync(usersDir, 'utf-8');
let users = readUsers.length == 0 ? [] : JSON.parse(readUsers);


function generateId() {
    if (users.length == 0) {
        return 1;
    } else {
        let lastUser = users[users.length - 1];
        return lastUser.id + 1;
    }
};

const usersController = {

    // *** CREATE USER ***

    register: (req, res) => {
        res.render('register', {
            customCss: '/css/register.css'
        });
    },
    createUser: (req, res) => {

        const errors = validationResult(req);
        

        if (!errors.isEmpty()) {
            return res.render('register', {
                customCss: '/css/register.css',
                registerErrors: errors.errors
            });
        } else {

            let encrytedPassword = bcrypt.hashSync(req.body.password, 10);

            if (req.body.password == req.body.verification) {
                let user = {
                    id: generateId(),
                    name: req.body.name,
                    lastName: req.body.lastName,
                    birthday: req.body.birthday,
                    adress: req.body.adress,
                    email: req.body.email,
                    password: encrytedPassword,
                };
                users.push(user);
                fs.writeFileSync(usersDir, JSON.stringify(users));
                res.send("Usuario agregado!");
            } else {
                res.send("Las contraseñas no coinciden.");
            };
        };
    },

    // *** USER LOGIN ***

    userLogin: (req, res) => {
        res.render('loginPage', {
            customCss: '/css/loginPage.css',
        });
    },
    processLogin: (req, res) => {
        /* Valida email y contraseña encriptada */

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let userToLog;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email && bcrypt.compareSync(req.body.password, users[i].password)) {
                    userToLog = users[i];
                    break;
                }
            }
            if (userToLog == undefined) {
                return res.render('loginPage', {
                    customCss: '/css/loginPage.css',
                    registerErrors: [{ msg: 'Alguno de los datos que ingresaste no es correcto.' }]
                });
            };

            req.session.loggedUser = userToLog;

            if (req.body.rememberMe != undefined) {
                res.cookie('rememberMe', userToLog.email, { maxAge: 60000 });
            }

            res.send(`Bienvenidx ${req.session.loggedUser.email}`);
        } else {
            return res.render('loginPage', {
                customCss: '/css/loginPage.css',
                registerErrors: errors.errors
            });
        };
    },

    check: (req, res) => {
        console.log(req.session.loggedUser);
        if (req.session.loggedUser == undefined) {
            return res.send("No estás loggeado");
        } else {
            return res.send(`El usuario loggeado es: ${req.session.loggedUser.email}`);
        }
    },

    // *** USER EDIT ***

    userEdit: (req, res) => {
        let idUser = req.params.idUser;
        let userToEdit = users[idUser];
        console.log(userToEdit);
        res.render('editUser', {
            customCss: '/css/editUser.css',
            userToEdit: userToEdit,
        });
    }
}

module.exports = usersController;