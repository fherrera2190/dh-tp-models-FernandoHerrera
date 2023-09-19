const db = require('../database/models')


module.exports = {
    list: (req, res) => {
        const movies = db.Genres.findAll();
        console.log(movies);
        res.render('moviesList', { movies });
    },
}