const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const db = require("../database/models/");

const Users = db.users;

const usersController = {
  register: (req, res) => {
    res.render("register", {
      customCss: "/css/register.css",
    });
  },

  createUser: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("register", {
        customCss: "/css/register.css",
        registerErrors: errors.errors,
      });
    } else {
      let encrytedPassword = bcrypt.hashSync(req.body.password, 10);

      if (req.body.password == req.body.verification) {
        Users.create({
          ...req.body,
          password: encrytedPassword,
        })
          .then((user) => res.send("Usuario agregado!"))
          .catch((error) => res.send(error));
      } else {
        res.send("Las contraseñas no coinciden.");
      }
    }
  },

  // *** USER LOGIN ***

  userLogin: (req, res) => {
    res.render("loginPage", {
      customCss: "/css/loginPage.css",
    });
  },

  processLogin: (req, res) => {
    /* Valida email y contraseña encriptada */

    let errors = validationResult(req);

    if (errors.isEmpty()) {
      Users.findAll({
        where: {
          email: req.body.email,
        },
      })
        .then((userToLog) => {
          userToLog = userToLog[0];

          if (userToLog == undefined) {
            return res.render("loginPage", {
              customCss: "/css/loginPage.css",
              registerErrors: [
                { msg: "Alguno de los datos que ingresaste no es correcto." },
              ],
            });
          } else {
            if (bcrypt.compareSync(req.body.password, userToLog.password)) {
              req.session.loggedUser = userToLog;
              if (req.body.rememberMe != undefined) {
                res.cookie("userCookie", userToLog.id, { maxAge: 60000 * 100 });
              }
              return res.redirect("/");
            } else {
              return res.render("loginPage", {
                customCss: "/css/loginPage.css",
                registerErrors: [{ msg: "Alguno de los datos es incorrecto." }],
              });
            }
          }
        })
        .catch((error) => res.send(error));
    }
  },

  // Check logged user
  check: (req, res) => {
    if (res.locals.isLogged) {
      return res.send(
        `El usuario loggeado es: ${req.session.loggedUser.email}`
      );
    } else {
      return res.send("No estás loggeado");
    }
  },

  //  User's profile
  userProfile: (req, res) => {
    Users.findByPk(req.session.userId)
      .then((userLogged) => {
        console.log(userLogged);

        res.render("userProfile", {
          customCss: "/css/userProfile.css",
          user: userLogged,
        });
      })
      .catch((error) => res.send(error));
  },

  logout: (req, res) => {
    req.session.destroy();
    res.cookie("userCookie", null, { maxAge: 1 });
    res.cookie("userCart", null, { maxAge: 1 });
    res.redirect("/");
  },

  // Edit user's data
  userEdit: (req, res) => {
    // let idUser = req.params.idUser;
    // let userToEdit = users[idUser];
    // console.log(userToEdit);
    // res.render('editUser', {
    //     customCss: '/css/editUser.css',
    //     userToEdit: userToEdit,
    // });
  },
};

module.exports = usersController;
