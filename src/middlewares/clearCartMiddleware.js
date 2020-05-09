
function clearCart(req, res, next) {
    clearedCookie = req.body.clearCart; // VALOR QUE ENTRA
    cartCookie = JSON.parse(req.cookies.userCart); //Array completo
    var index = cartCookie.indexOf(clearedCookie);
    if (index !== -1) cartCookie.splice(index, 1);
    res.cookie('compra', JSON.stringify(DatosCookie), { maxAge: 60000 * 100 });
    cartCookie = JSON.stringify(cartCookie) //FORMATO no JSON
    next();
}

module.exports = clearCart;