let loginButton = document.getElementById('#loginButton');
let registerButton = document.getElementById('#registerButton');

if (req.session.loggedUser != undefined) {
    loginButton.style.visibility = "hidden";
    registerButton.style.visibility = "hidden";
}