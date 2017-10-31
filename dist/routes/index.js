'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _pokemon = require('../controller/pokemon');

var _pokemon2 = _interopRequireDefault(_pokemon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

//CONNECT TO DB 
(0, _db2.default)(function (db) {

    //INTERNAL MIDDLEWARE
    router.use((0, _middleware2.default)({ config: _config2.default, db: db }));

    //API ROUTES V1(/v1)
    router.use('/pokemons', (0, _pokemon2.default)({ config: _config2.default, db: db }));
});

exports.default = router;
//# sourceMappingURL=index.js.map