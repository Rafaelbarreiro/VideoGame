const axios = require ('axios')
const {Videogame, Genre} = require ('../db')
const {API_KEY} = process.env


const allGenres = async () =>{
    const genreByApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = genreByApi.data.results.map(e => e.name);
    //console.log(genres)

    //me falta guardar o crearlos en mi db usando el findOrCreate
    genres.forEach(e => Genre.findOrCreate({ 
        where: {name: e} 
    }))

    const allGenres = await Genre.findAll();
    //console.log(allGenres)
    return allGenres;

};

module.exports = allGenres;