const axios = require("axios");
const express = require("express");
const { Genre, Videogame } = require("../db");
const router = express.Router();
const getAll = require ("../controller/allgames")

router.post ('/', async (req, res) =>{
    let { name, description, released, rating, platforms, genre, img } =
    req.body;
    if(!name || !description || !platforms){
        released.status(400).send("Some required information is missing")
    }

    const findVideogame = await Videogame.findAll({ where: { name: name } });
    if (findVideogame.length != 0) {
        return res.send("The name already exists");
    }

    const allVideoGame = await getAll();
    const gameFound = allVideoGame.find(
        (e) => e.name.toLowerCase() === name.toLowerCase())
          if(!gameFound){
            const newVideogame = await Videogame.create({
                name,
                description,
                released,
                rating,
                img,
                platforms,
            });
            const genreDb = await Genre.findAll({
                where: {
                    name : genre
                },
            });
            //console.log(genreDb);
            await newVideogame.addGenre(genreDb);
            res.status(200).send("Videogame created successfully")

          }else{
            res.status(200).send("Videogame name already exist")
          }
    
    
});


module.exports = router;