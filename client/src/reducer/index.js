import {
  GET_VIDEOGAMES
} from '../actions/index'

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    platforms: [],
    videogameDetail: [],
    loading: false
  };

  function rootReducer(state = initialState, action){
    switch(action.type){
      case GET_VIDEOGAMES:
        return{
          ...state,
          videogames: action.payload,
          allVideogames: action.payload,
        };
        

        default:
      return { ...state };
    }
  }

  export default rootReducer;