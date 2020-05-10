//  Require's 
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const genresMiddleware = require('./middlewares/genresInNavbar');
const loggedUserMiddleware = require('./middlewares/loggedUserMiddleware');
const cartCounterMiddleware = require('./middlewares/cartCounterMiddleware');
const isAdminUser = require('./middlewares/storeAdminMiddleware');
//  express() - (don't touch) 
const app = express();

//  Middlewares - (don't touch) 
app.use(express.static(path.join(__dirname, '../public'))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({
  extended: false
}));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(session({ secret: "secret" }));
app.use(genresMiddleware);
app.use(loggedUserMiddleware);
app.use(cartCounterMiddleware);
app.use(isAdminUser);

//  Template Engine - (don't touch) 
app.set('view engine', 'ejs');
app.set('views', './src/views');

//  WRITE YOUR CODE FROM HERE 
//  Route System require and use() 
const mainRouter = require('./routes/mainRoutes');
const productsRouter = require("./routes/productsRoutes");
const usersRouter = require("./routes/usersRoutes");
const apiRouter = require('./routes/apiRoutes');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// 404 custom error
app.get('/not-found', (req, res) => {
  res.status(404).render('404', { customCss: null });
})

// Acceso Denegado
app.get('/denied-access', (req, res) => {
  res.status(401).render('deniedAccess', { customCss: null });
})

//  DON'T TOUCH FROM HERE 
//  catch 404 and forward to error handler 
app.use((req, res, next) => next(createError(404)));

//  error handler 
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//  exports app - dont'touch 
module.exports = app;