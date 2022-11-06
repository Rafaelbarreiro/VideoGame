import React from 'react';
import {Link} from 'react-router-dom';
import s from './Card.module.css'

export default function Card ({id, name, rating, img, released}){
    return(
        <div>
            <Link to={`/videogames/${id}`}>
            <div>
               
                <img className={s.img} src={img} alt="img not found" />
                <h3 className={s.text}>{name} </h3>
                <h5 className={s.text}>Rating: {rating} </h5>
                
                
            </div>
            </Link>
        </div>
    )
}