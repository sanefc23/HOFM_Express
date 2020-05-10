module.exports = function (req, res, next) {
    if (req.session.loggedUser == undefined || req.session.loggedUser.isAdmin == false) {
        return res.redirect('/denied-access');
    } else {
        next();
    }
}
