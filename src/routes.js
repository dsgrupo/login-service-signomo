const express = require('express');
const AuthController = require('./app/controllers/AuthController');
const ReviewController = require('./app/controllers/ReviewController');

const routes = express.Router();

routes.get('/ping', (_, res) => {
  res.json({ ping: 'pong!' });
});

routes.post('/login', AuthController.login);
routes.post('/register', AuthController.register);

routes.get('/users/:user_id/reviews', ReviewController.index);
routes.post('/users/:user_id/reviews', ReviewController.store);

module.exports = routes;
