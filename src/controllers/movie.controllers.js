const sql = require("../db/connection");
const { QueryTypes } = require('sequelize');

exports.createMovie = async (req, res) => {
    try {
    const text ="INSERT INTO movies(title, year, actor, watched, description, userID) VALUES(:title, :year, :actor, :watched, :description, (SELECT id FROM movieusers WHERE username = :userID ))"; 
    await sql.query(text, {
      replacements: { 
          title: req.body.title,
          year: req.body.year,
          actor: req.body.actor,
          watched: false,
          description: req.body.desc,
          userID: req.body.user,
      },
      type: QueryTypes.INSERT,
      });
        res.status(200).send({message: 'Movie created'});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'No movie created'});
    }
};


exports.listMovies = (req, res) => {
    try {
        const movies = {
            movie: req.params.movie,
        };
        res.status(200).send({movies, message: 'Movies available'});
    } catch (error) {
        res.status(400).send({ message: 'No movie found'});
    }
};

exports.updateMovie = (req, res) => {
    try {
        const movie = {
            title: req.body.title,
            user: req.body.user,
        };
        res.status(200).send({movie, message: 'Movie updated'});
    } catch (error) {
        res.status(500).send({ message: 'No movie update'});
    }
};

exports.deleteMovie = (req, res) => {
    try {
        const movie = {
            title: req.params.title,
            user: req.params.username
        };
        res.status(200).send({movie, message: 'Movie deleted'});
    } catch (error) {
        res.status(400).send({ message: "Delete unsuccessful"});
    }
};