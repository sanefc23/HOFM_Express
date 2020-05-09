function cart(req, res, next) {
    let cookie = req.cookies.userCart
    if (cookie != null) {
        console.log('Cookie already exists')
    } else {
        let cartCookie = [];
        res.cookie('userCart', JSON.stringify(cartCookie), { maxAge: 60000 * 100 });
        console.log('Cookie created successfully');
    }
    next();
}

module.exports = cart;