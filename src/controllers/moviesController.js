const db = require('../database/models')

module.exports = {
    list: (req, res) => {
        res.render('moviesList', { movies: [] });
    },
}