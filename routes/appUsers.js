var express = require('express');
var router = express.Router();

// ------------------------------------

router.get('/', function(req, res, next) {
  res.send('respond with app (se autenticado)');
});

router.post('/', function(req, res, next) {
  res.send('autenticar');
});

// ------------------------------------

router.get('/user', function(req, res, next) {
  res.send('se tiver autenticado mostrar todos cadernos');
});

router.post('/user', function(req, res, next) {
  res.send('criar novo usuario (registro)');
});

router.put('/user', function(req, res, next) {
  res.send('atulizar dados do usuario');
});

// ------------------------------------

router.get('/user/book/', function(req, res, next) {
  res.send('se tiver autenticado mostrar caderno especifico e todas suas paginas');
});

router.post('/user/book/', function(req, res, next) {
  res.send('usuario criou novo caderno');
});

router.put('/user/book/', function(req, res, next) {
  res.send('usuario deu update num caderno');
});

router.delete('/user/book/', function(req, res, next) {
  res.send('usuario deletou um caderno E TODAS SUAS PAGINAS');
});

// ------------------------------------

router.get('/user/book/page', function(req, res, next) {
  res.send('se tiver autenticado mostrar pagina especifica');
});

router.post('/user/book/page', function(req, res, next) {
  res.send('usuario criou nova page');
});

router.put('/user/book/page', function(req, res, next) {
  res.send('usuario deu update numa pagina');
});

router.delete('/user/book/page', function(req, res, next) {
  res.send('usuario deletou uma pagina');
});



module.exports = router;
