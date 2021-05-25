const path = require('path');
const axios = require('axios').default

exports.home_page = (req, res, next) => {
    const filePath = path.join(__dirname, '..', '/Pages' ,'index.html');
    res.sendFile(filePath);
};

exports.movie_api = async (req, res, next) => {
    try {
        const response = await axios.get('https://swapi.dev/api/films/');
        res.status(200).json({
            movies: response.data
        })
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}