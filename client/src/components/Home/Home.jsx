import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from '../../actions';

import Loading from "../Loading/Loading";



function Home() {
    const dispatch = useDispatch;
    const allGames = useSelector((state) => state.videogames);  //lo mismo que mapStateToProps

    useEffect (() => {
        dispatch(getVideogames());    //lo mismo que matchDispacthToProps

    },[dispatch]);

    return (
        <div>
            {allGames.length > 0 ?(
            <div>
                
            <h1>Videogames</h1>

            </div>
        
            ) : (
                <Loading/>
            ) }
            </div>
    );
};

export default Home