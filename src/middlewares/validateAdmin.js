function validateAdmin(req, res, next) {

    if (req.session.loggedUser == undefined || req.session.loggedUser.email != 'san.efc@gmail.com') {
        return res.redirect('/denied-access');
    } else {
        next();
    }

}

module.exports = validateAdmin;