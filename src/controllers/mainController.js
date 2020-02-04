const fs = require('fs');

const productsDir = 'data/products.json';

let products = fs.readFileSync(productsDir, 'utf-8');
let parsedProducts = products.length > 0 ? JSON.parse(products) : null;

let albums = [];

for (const album of parsedProducts) {
	/* acá iría una función que muestre los 12
	   albums más recientes */
	albums.push(
		{
			id: album.id,
			artist: album.artist,
			title: album.title,
			frontCover: album.frontCover,
			backCover: album.backCover,
			description: album.description,
			tracklist: album.tracklist
		}
	);
}

/* TO-DO: Hacer un query string que me mande a
   productDetail con el id y los datos
   correspondientes para el producto seleccionado.
   tipo:  /product/id=1 */

const mainController = {
	root: (req, res) => {
		res.render('homePage', {
			customCss: '/css/homePage.css',
			//corregir albums por "novedades" cuando esté hecha la func.
			novedades: albums
		});
	},
};

module.exports = mainController;