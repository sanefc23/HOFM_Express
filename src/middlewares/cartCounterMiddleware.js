module.exports = (req, res, next) => {
    if (req.cookies.userCart != undefined) {
        const cartCounter = JSON.parse(req.cookies.userCart);
        res.locals.cartCounter = cartCounter.length;
        next();
    } else {
        res.locals.cartCounter = 0;
        next();
    }
}