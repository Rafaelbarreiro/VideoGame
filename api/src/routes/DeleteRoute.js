const axios = require("axios");
const express = require("express");
const router = express.Router();
const getAll = require ("../controller/allgames")


router.delete ('/', async (req, res)=>{
    let {id} = req.query;
    let allGames = await getAll();
    if(!id.includes('-')){
        res.send("No se pueden eliminar Videogames de API")
    }
    let forDelete = await allGames.find ( e => e.id === id);
    if (id && forDelete){
        await forDelete.destroy()
        res.send("se elimino con exito")
    }else {
        res.status(400).json({error: "No se recibieron los parámetros necesarios para borrar el Post"})
    }
});

module.exports = router;