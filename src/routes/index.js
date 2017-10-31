import express from 'express';
import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import pokemon from '../controller/pokemon';


let router = express();

//CONNECT TO DB 
initializeDb(db => {

    //INTERNAL MIDDLEWARE
    router.use(middleware({config, db}));

    //API ROUTES V1(/v1)
    router.use('/pokemons', pokemon({config, db}));
});

export default router;

