module.exports = function (req, res, next) {
    res.locals.isAdmin = false;
    if (req.session.loggedUser == undefined || req.session.loggedUser.isAdmin == false) {
        res.locals.isAdmin = false;
        next();
    } else {
        res.locals.isAdmin = true;
        next();
    }
}