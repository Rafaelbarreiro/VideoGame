import {
  GET_VIDEOGAMES,
  GET_GAMEBYNAME,
  GET_DETAIL,
  ORDER_BY_NAME,
  ORDER_BY_RATING
} from '../actions/index'

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    platforms: [],
    videogameDetail: [],
    gamesByName: [],
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
        
      case GET_GAMEBYNAME:
        return{
              ...state,
              videogames: action.payload,
              //gamesByName: action.payload,
        };

        case GET_DETAIL:
          return{
            ...state,
            videogameDetail: action.payload
          };
        case ORDER_BY_NAME:
          let aZVideogames=
            action.payload === "AZ"?
              state.videogames.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                  return 1;
                }
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                  return -1;
                }
                return 0;
              })
              :state.videogames.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                  return 1;
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                  return -1;
                }
                return 0;
              })
          return{
            ...state,
            videogames: action.payload === "default"? state.videogames : aZVideogames,
          };
          case ORDER_BY_RATING:
            let ratingGame=
              action.payload === "Mayor"?
                state.videogames.sort(function(a,b){
                  if(a.rating > b.rating){
                    return 1;
                  }
                  if(a.rating < b.rating){
                    return -1;
                  }
                  return 0;
                })
                :state.videogames.sort(function(a,b){
                  if(a.rating < b.rating){
                    return 1;
                  }
                  if(a.rating > b.rating){
                    return -1;
                  }
                  return 0;
                })
            return{
              ...state,
              videogames: action.payload === "default"? state.videogames : ratingGame,
            };

        default:
      return state ;
    }
  }

  export default rootReducer;