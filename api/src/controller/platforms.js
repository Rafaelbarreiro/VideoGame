const axios = require ('axios')
const {Videogame, Genre} = require ('../db')
const {API_KEY} = process.env
const getAll = require ("../controller/allgames")

