const axios = require("axios");
const express = require("express");
const router = express.Router();
const getAll = require ("../controller/allgames");
const { Platform} = require ('../db');
//const Platforms = require("../models/Platforms");


router.get('/', async (req, res) => {
    try {
        //console.log('hola')
        const all = await getAll();
        const allPlatforms = [];
        const nuevo = []
        all.map(e => nuevo.push(e.platform.split(', '))
        )
        nuevo.map(e => e.map(p => {
            if (!allPlatforms.includes(p)){
                allPlatforms.push(p)
            }
        }))
        console.log(allPlatforms)
        allPlatforms.forEach(e => Platform.findOrCreate({
            where: {name: e}
        }))
        const PlatformApi = await Platform.findAll();
        
        res.status(200).json(PlatformApi)
        }catch(e) {
            res.send(e)
        }
    })

module.exports = router;