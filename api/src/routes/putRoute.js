const axios = require("axios");
const express = require("express");
const { Genre, Videogame } = require("../db");
const router = express.Router();
const { Sequelize, Op } = require('sequelize');

router.put ('/', async (req, res) => {
    const {id} = req.query;
    const {name, description, rating, released, platform} = req.body;
    //console.log(id) 
 
     try {
        let forUpdate = await Videogame.findByPk(id);
        console.log(forUpdate)
        await forUpdate.update({
            name,
            description,
            rating,
            released,
            platform
        });
        /* let genDb= await Genre.findAll({
            where:{
                name:{
                    [Op.in]: req.body.genres,
                },
            },
        });
        await updateVideo.setGenres(genDb); */
        res.status(200).send(forUpdate)
    } catch (error) {
        res.status(400).send(error.message)
    } 
});

module.exports = router;