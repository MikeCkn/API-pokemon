import mongoose from 'mongoose';
import{ Router } from 'express';
import Pokemon from '../model/pokemon';
import bodyParser from 'body-parser';

export default({config, db}) => {
    let api = Router();

//GET METHOD ALL
//pokemons
        api.get('/', (req, res) => {
            Pokemon.find({}, (err, pokemons) => {
                if (err) {
                     res.send(err);
                }
                else res.json(pokemons);
            });
        });

        //GET METHOD ID
        //pokemons/id
        api.get('/:id', (req, res) => {
            Pokemon.findById(req.params.id, (err, pokemon) => {
                if(err) {
                    res.send(err);
                }
                else res.json(pokemon);
            });
        });

        //POST METHOD
        //pokemons/add
        api.post("/add", (req, res) => {
            let newPok = new Pokemon(req.body);
            newPok.save((err) => {
            if (err) {
                res.send(err)
            }
                res.json({message : "Pokemon saved successfully"});
            });
        });

        //PUT METHOD
        //pokemons/id
        api.put('/:id', (req, res) => {
            Pokemon.findById(req.params.id, (err, pokemon) => {
                if(err) {
                    res.send(err);
                }
                pokemon.name = req.body.name;
                pokemon.save((err) => {
                    if(err) {
                        res.send(err);
                    }
                        res.json({message: 'Pokemon has been successfully updated'});
                });
            });
        });

        //DELETE METHOD
        //pokemons//id
        api.delete('/:id', (req, res) => {
            Pokemon.remove({
                _id : req.params.id }, (err, pokemon) => {
                    if (err) {
                        res.send(err);
                    }
                        res.json({message: "Pokemon has been successfully removed"});
            });
        });
            return api;
        };