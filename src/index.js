import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import http from 'http';
import cors from 'cors';
import config from './config';
import routes from './routes'
import mongoose from 'mongoose';

let app = express();
app.server = http.createServer(app);
// MIDDLEWARE
//PARSE APPLICATION/JSON
app.use(bodyParser.json({
    limit : config.bodyLimit
}))

request('http://pokeapi.co/api/v2/pokemon-form/1/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// app.get('/', (req,res) => {
//     res.send('Salut');
// })
app.use("/", routes) // la 1ere route.

app.listen(config.port, () => {
    console.log(`Server OK ! ${config.port}`);
})