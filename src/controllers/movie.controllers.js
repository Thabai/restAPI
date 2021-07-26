exports.createMovie = (req, res) => {
    try {
        const movie = {
            title: req.body.title,
            watched: true,
            user: req.body.user,
        };
        res.status(200).send({movie, message: 'Movie created'});
    } catch (error) {
        res.status(500).send({ message: 'No movie created'});
    }
};

exports.listMovies = (req, res) => {
    try {
        const movies = {
            movie: req.movie,
        };
        res.status(200).send({movies, message: 'Movies available'});
    } catch (error) {
        res.status(500).send({ message: 'No movies'});
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
            user: req.params.user
        };
        res.status(200).send({movie, message: 'Movie deleted'});
    } catch (error) {
        res.status(500).send({ message: "Delete unsuccessful"});
    }
};