const axios = require("axios");
const express = require("express");
const router = express.Router();
const getAll = require ("../controller/allgames");


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
        res.status(200).json(allPlatforms)
        }catch(e) {
            res.send(e)
        }
    })

module.exports = router;