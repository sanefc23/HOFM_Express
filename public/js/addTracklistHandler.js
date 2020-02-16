//No funciona

var tracklist = [];

function addToTracklist() {
    let track = document.getElementById('newTrack');
    tracklist.push(track);
}

// Ejemplos
// let thePs = document.querySelectorAll('p');
// let secondParagraph = document.querySelector('#idDelSegundoParag');
// for (const oneP of thePs){
//      oneP.classlist.add('special-p'); 
// }

// for (const oneP of thePs) {
//     if(!oneP.classList.contains('special-p')){
//         oneP.classList.add('special-p');
//     }
// }
// for (const oneP of thePs) {
//     oneP.classList.toggle('special-p');
// }

// let linkCss = document.querySelector('link');
// let button = document.querySelector('button');

// button.onclick = function () {
let cssHref = linkCss.getAttribute('href');
//     if (cssHref === '/stylesheets/style.css) {
//         linkCss.setAttribute('href', '/stylesheets/dark-style.css');
//         button.innerText = 'Activar Light Theme';
//     } else {
//     if (cssHref === '/stylesheets/style.css) {
//         linkCss.setAttribute('href', '/stylesheets/style.css');
//         button.innerText = 'Activar Dark Theme';
//  }
// }