// contains startup code + endpoints

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');
// was missing; caused crashes when summoning any "movies"-data
const movies = require("./movie-model")

console.log(Object.keys(movieModel));

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and return the movies from the model as an array */
  res.json(Object.values(movieModel));
  // console.log(Object.values(object));
  // res.sendStatus(404)
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */

  const movie = movies[req.params.imdbID];
  // if movie not found: return 404; e.g. with --> res.sendStatus(404)
  // check after implementation: http://localhost:3000/movies/<someExistingImdbID> --> JSON if existing, error if not

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
})

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

