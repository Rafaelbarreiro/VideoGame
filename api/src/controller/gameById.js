const axios = require ('axios')
const {Videogame, Genre} = require ('../db')
const {API_KEY} = process.env



const gameById = async (id) => {
    if (!id.includes('-')){
    try {
      const apiData = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      const game = await apiData.data;
      const gameDetail = {
        id: game.id,
        name: game.name,
        released: game.released,
        rating: game.rating,
        genres: game.genres.map((e) => e.name),
        platforms: game.parent_platforms.map((e) => e.platform.name),
        img: game.background_image,
        description: game.description_raw,
      };
      return gameDetail;
    } catch (e) {
      console.log(e);
    }}else {
        let gameFound = await Videogame.findByPk(id, {
            include: [{
                model: Genre,
                attributes: ['name'],
                through : {
                    attributes: [],
                }
            }]
        })
        var find = []
        find.push(gameFound)

        res.status(200).json(find)
    }
  };




module.exports = gameById;