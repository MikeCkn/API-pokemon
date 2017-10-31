'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _pokemon = require('../model/pokemon');

var _pokemon2 = _interopRequireDefault(_pokemon);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    //GET METHOD ALL
    //pokemons
    api.get('/', function (req, res) {
        _pokemon2.default.find({}, function (err, pokemons) {
            if (err) {
                res.send(err);
            } else res.json(pokemons);
        });
    });

    //GET METHOD ID
    //pokemons/id
    api.get('/:id', function (req, res) {
        _pokemon2.default.findById(req.params.id, function (err, pokemon) {
            if (err) {
                res.send(err);
            } else res.json(pokemon);
        });
    });

    //POST METHOD
    //pokemons/add
    api.post("/add", function (req, res) {
        var newPok = new _pokemon2.default(req.body);
        newPok.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Pokemon saved successfully" });
        });
    });

    //PUT METHOD
    //pokemons/id
    api.put('/:id', function (req, res) {
        _pokemon2.default.findById(req.params.id, function (err, pokemon) {
            if (err) {
                res.send(err);
            }
            pokemon.name = req.body.name;
            pokemon.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Pokemon has been successfully updated' });
            });
        });
    });

    //DELETE METHOD
    //pokemons//id
    api.delete('/:id', function (req, res) {
        _pokemon2.default.remove({
            _id: req.params.id }, function (err, pokemon) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Pokemon has been successfully removed" });
        });
    });
    return api;
};
//# sourceMappingURL=pokemon.js.map