import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export function getVideogames () {
    return async function (dispacth){
        try {
            var json = await axios ("http://localhost:3001/videogames");
             dispacth({
                type: GET_VIDEOGAMES,
                payload : json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
};