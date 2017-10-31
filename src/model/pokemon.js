import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let PokemonSchema = new Schema ({
    name: String
})

module.exports = mongoose.model('Pokemon', PokemonSchema);