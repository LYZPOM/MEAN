'use strict';

// security.js
var rateLimit = require('express-rate-limit');
var helmet = require('helmet');

module.exports = (app) => {
  app.use(helmet({
    cacheControl: false,
    frameguard: false
  }));

  app.use('/api/', rateLimit({
    windowMs: 30 * 1000, // seconds
    delayMs: 0,
    max: 5,
    message: 'Too many requests, please try again in 30 seconds.'
  }));

};
