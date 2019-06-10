'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _home = require('./routes/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var app = (0, _express2.default)();

app.set('view engine', 'ejs');
app.use((0, _express.static)('public'));

app.use('/', _home2.default);

app.listen(3000, function () {
  console.log('listening on port no 3000');
});