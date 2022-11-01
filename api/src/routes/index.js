const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios')
const {API_KEY} = process.env
const {Videogame, Genre} = require ('../db')
const getAll = require ("../controller/allgames")
const gameById = require ("../controller/gameById");
const allGenres = require ("../controller/genres")
const putRoute = require ('./putRoute'); 
const deleteRoute = require ('./DeleteRoute')
const postRoute = require ('./postRoute')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get ('/videogames', async (req, res) =>{
    const {name} = req.query; //por si me pasan por query
    let allGames = await getAll();

    if (name) {
            let videoName = allGames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
            if (videoName.length){
                 res.status(200).send(videoName)
                }else {
                    res.status(404).send("Videogame not found")
                }
    }else{
        res.status(200).send(allGames)
    }
});

router.get('/videogames/:id', async (req, res) => {
    let { id } = req.params;
    let videogamesTotal = await gameById(id);
    res.status(200).send(videogamesTotal);

}
);

router.get ('/genres', async (req, res) => {
    try {
        let genero =await allGenres();
        //console.log(genero)
        res.status(201).json(genero)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/platforms', async (req, res) => {
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
router.use('/videogames', postRoute);
router.use('/videogames', deleteRoute);
router.use('/videogames', putRoute);




module.exports = router;
