const db = require('../database/models');
const User = db.users;

module.exports = async (req, res, next) => {
    res.locals.isAdmin = false;
    if (req.cookies.userCookie != undefined) {
        const user = await User.findAll(
            {
                where: {
                    id: req.cookies.userCookie,
                },
            }
        );
        if (user[0].isAdmin == true) {
            res.locals.isAdmin = true;
        }
        return next();
    } else {
        return next();
    }
}