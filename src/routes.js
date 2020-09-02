const express = require('express');

const routes = express.Router();
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);


routes.post('/session', SessionController.store);


module.exports = routes;