/* import React from "react";
import { useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 
import { getGenres, orderByGenre, getPlatforms, fiteredPlatform,  orderByName, orderByRating} from '../../actions';
import { useDispatch, useSelector} from "react-redux";


import s from "./SideBar.module.css"

export default function SideBar ({setCurrentPage}){

    const dispatch = useDispatch();
    const platform = useSelector((state) => state.platforms)
    const genre = useSelector((state) => state.genres) // eslint-disable-next-line
    const [order, setOrder] = useState('');

 useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms())
    }, [dispatch]);
 

    return(
        <div className={s.container}>
                <select onChange={e => handleByGenres(e)} className={s.selected} >
                <option value='All'> ALL GENRES </option>
                {genre.map(el => (
                            <option key={el.id} value={el.name}>{el.name}</option>
                        ))
                        }
                </select>

                <select onChange={e => handleByPlatform(e)} className={s.selected} >
                <option value='All'> ALL PLATFORMS </option>
                {platform.map(el => (
                            <option key={el.id} value={el.name}>{el.name}</option>
                        ))
                        }
                </select>

                <select onChange={e => handleSort(e)}  className={s.selected}>
                      <option value='Alphabetical Order'> Order By Name</option>  
                    <option value='AZ'>  A-Z </option>
                    <option value='ZA'>  Z-A </option>
            </select>

            <select onChange={e => handleRating(e)}  className={s.selected}>
                      <option value='Rating Order'> Order By Rating</option>  
                    <option value='Menor'>  Highest Rating </option>
                    <option value='Mayor'>  Lowest Rating </option>
            </select>


        </div>
    )
} */