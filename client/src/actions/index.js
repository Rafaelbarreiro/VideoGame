import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";

export function getVideogames () {
    return async function (dispatch){
        try {
            var json = await axios.get ("http://localhost:3001/videogames");
             return dispatch({
                type: GET_VIDEOGAMES,
                payload : json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    };
};

export function getGenres() {
    return async function (dispatch){
        try {
            var json = await axios.get ("http://localhost:3001/genres");
            return dispatch({
                type: GET_GENRES,
                payload: json.data
            })
        } catch (error) {
            
        }
    }
}