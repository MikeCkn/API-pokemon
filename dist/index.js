'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);
// MIDDLEWARE
//PARSE APPLICATION/JSON
app.use(_bodyParser2.default.json({
    limit: _config2.default.bodyLimit
}));

(0, _request2.default)('http://pokeapi.co/api/v2/pokemon-form/1/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});

// app.get('/', (req,res) => {
//     res.send('Salut');
// })
app.use("/", _routes2.default); // la 1ere route.

app.listen(_config2.default.port, function () {
    console.log('Server OK ! ' + _config2.default.port);
});
//# sourceMappingURL=index.js.map