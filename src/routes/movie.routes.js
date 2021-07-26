const { Router } = require('express');
const { createMovie, listMovies, updateMovie, deleteMovie } = require('../controllers/movie.controllers');
const movieRouter = Router();

movieRouter.post('/movies', createMovie);
movieRouter.get('/movies', listMovies);
movieRouter.put('/movies', updateMovie);
movieRouter.delete("/movies/username", deleteMovie);

module.exports = movieRouter;
