import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clear } from '../../actions/index'
import Loading from "../Loading/Loading";
import s from './Details.module.css'


export default function Details(props) {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const myGame = useSelector((state) => state.videogameDetail);
    let gameId = props.match.params.id;
console.log(myGame)
    if(Object.keys(myGame).length > 0 && loading){
        setLoading(false);
    }

    useEffect(() => {
        dispatch(getDetail(gameId))
        
        return () => {
            dispatch(clear(gameId))
        };
    }, [dispatch, gameId]);


    const platformDetail = myGame.platforms?.join('  ')
    const genreDetail = (myGame.genres?.join('  '))

    return (
        <div className={s.container}>
            {Object.keys(myGame).length > 0 && !loading ? 
                <div className="s.container">
                    <div>
                        <Link to='/home'>
                            <button> Home </button>
                        </Link>
                    </div>
                    <div>
                            <h1>{myGame.name}</h1>
                        </div>
                    <div style={{
                        backgroundImage: `url(${myGame.img})`,
                    }} className={s.containerImg}>
                        <div className={s.platform}>
                            <p className={s.platformLetter} >{platformDetail? platformDetail : "not Found"} </p>
                        </div>
                    </div>
                    <div className={s.details}>
                            <p>{genreDetail} </p>
                            <p>Rating: {myGame.rating} </p>
                            <p>Launch: {myGame.released} </p>
                        </div>
                    <p>{myGame.description} </p>
                </div>

             : !Object.keys(myGame).length > 0 && loading ? (
             <Loading />): myGame.length === 0 && (
                <h1>not found</h1>
             )}
        </div>
    )
}