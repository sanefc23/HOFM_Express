const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const db = require("../database/models/");

const Users = db.users;

const usersController = {
  register: (req, res) => {
    res.render("register");
  },

  createUser: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("register", {
        registerErrors: errors.errors,
      });
    } else {
      let encrytedPassword = bcrypt.hashSync(req.body.password, 10);

      Users.create({
        ...req.body,
        password: encrytedPassword,
      })
        .then((user) => {
          Users.findAll({
            where: {
              email: req.body.email,
            },
          }).then((userToLog) => {
            userToLog = userToLog[0];
            req.session.loggedUser = userToLog;
            res.cookie("userCookie", userToLog.id, { maxAge: 60000 * 100 });
            return res.redirect('/');
          })
        })
        .catch((error) => res.send(error));
    }
  },

  // *** USER LOGIN ***

  userLogin: (req, res) => {
    res.render("loginPage");
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
              registerErrors: [
                { msg: "Mail incorrecto." },
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
                registerErrors: [{ msg: "Contraseña incorrecta." }],
              });
            }
          }
        })
        .catch((error) => res.send(error));
    }
  },

  //  User's profile
  userProfile: (req, res) => {
    Users.findByPk(req.session.userId)
      .then((userLogged) => {
        console.log(userLogged);

        res.render("userProfile", {
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
