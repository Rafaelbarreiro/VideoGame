import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_GAMEBYNAME = "GET_GAMEBYNAME";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";

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
export function getVideogameByName (name){
    
    return async function (dispatch){
        try{
            var json = await axios.get (`http://localhost:3001/videogames?name=${name}`);
            return dispatch({
                type: GET_GAMEBYNAME,
                payload: json.data,
               
            })
        } catch (error){
            console.log (error.message)
        }
        console.log(json)
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
};
export function getDetail (id){
    
    return async function (dispatch){
        try{
            var json = await axios.get (`http://localhost:3001/videogames/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data,  
            })
        } catch (error){
            console.log (error.message)
        }
    };
};
export function clear(){
    return{
        type: 'CLEAR',
        payload : {}
    }
};
export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload: payload
    }
};
export function orderByRating(payload){
    return{
        type: ORDER_BY_RATING,
        payload:payload
    }
}