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

    let genreDetail = []
   /*  console.log(myGame)
    console.log(myGame.genres.map(e => e.name).join('  '))
    myGame.id.includes('-')? genreDetail = myGame.genres.map(e => e.name).join('  ') : */

    genreDetail = myGame.genres?.join('   ') 
   /*  const genero = myGame.genres.map(e => e.name)
    console.log(genero, 'genero') */

    
    return (
        <div >
            {Object.keys(myGame).length > 0 && !loading ? 
                <div className={s.container}>
                    <div className={s.left}>
                        <h1>{myGame.name}</h1>
                        <div className={s.platform}>
                            <p className={s.platformLetter} >{platformDetail? platformDetail : "not Found"} </p> 
                            <img src={myGame.img} alt="img not found" className={s.image} />
                            <p className={s.platformLetter}>{genreDetail} </p>
                        </div>
                        
                       
                        
                        <p className={s.description}>Rating: {myGame.rating} </p>
                        <p className={s.description}>Launch: {myGame.released} </p>
                    </div>

                    <div className={s.rigth}>
                       <p className={s.description}>Description: </p> 
                        <p>{myGame.description} </p>
                        <Link to='/home'>
                            <button className={s.button}> Home </button>
                        </Link>
                    </div>
                    
                </div>

             : !Object.keys(myGame).length > 0 && loading ? (
             <Loading />): myGame.length === 0 && (
                <h1>not found</h1>
             )}
        </div>
    )
}