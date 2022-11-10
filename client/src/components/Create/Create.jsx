import React from "react";
import { useState, useEffect } from "react";
import {Link, useHistory} from 'react-router-dom';
import {getGenres, getPlatforms, postVideogames} from '../../actions/index';
import { useDispatch, useSelector } from "react-redux";
import s from "./Create.module.css"

export default function VideogameCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const genres = useSelector((state) => state.genres)
    const plataforma = useSelector((state) => state.platforms)

    const [input, setInput] = useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        img:"",
        platforms:[],
        genre:[]
    })
    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    },[dispatch]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleCheckGenre(e){
        if(e.target.checked){
            setInput({
                ...input,
                genre:  [...input.genre,e.target.value]
            })
        }
    }

   /*  function handleDeleteGenre(e){
        setInput({
            ...input,
            genres: input.genres(el => el !==e )
        })
    } */
    function handleCheckPlatform(e){
        if(e.target.checked){
            setInput({
                ...input,
                platforms:[...input.platforms,e.target.value]
            })
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postVideogames(input));
        setInput({
            name: "",
            description:"",
            released:"",
            rating:"",
            img:"",
            genre:[]
        });
        alert("Videogame created succesfully")
        history.push('/home')
        window.location.reload('/home');
    }


   

return(
    <div className={s.bg}>
        <div>
        <Link to= '/home'><button>Home</button></Link>
        <h2>Create a New Videogame</h2>
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
            <div>
                <label>Name:</label>
                <input
                onChange={handleChange}
                type= "text"
                value= {input.name}
                name= "name"
                />
            </div>

            <div>
                <label>Released:</label>
                 <input
                 onChange={handleChange}
                 type="date"
                 value={input.released}
                 name="released"
                />
             </div>

             <div>
                <label>Rating:</label>
                 <input
                 onChange={handleChange}
                 type="float"
                 value={input.rating}
                 name="rating"
                />
             </div>

             <div>
                <label>Imagen:</label>
                 <input
                 onChange={handleChange}
                 type="text"
                 value={input.img}
                 name="img"
                />
             </div>
             <div>
            <p>Description:</p>
            <textarea
            onChange={handleChange}
              type="text"
              value={input.description}
              name="description"
            />
          </div>
             </div>

            <div className={s.select}> 
          
             <h1>Genre:</h1>
             <br></br>
             {genres?.map((e) => {
                return(
                    <label key={e.id}><input
                    onChange={handleCheckGenre}
                    type="checkbox"
                    name={e.name}
                    value={e.name}
                    />{e.name} </label>
                )
             })}
            <h1>Platform:</h1>
             {plataforma?.map((e) => {
                return(
                    <label key={e}><input
                    onChange={handleCheckPlatform}
                    type="checkbox"
                    name={e}
                    value={e}
                    />{e} </label>
                )
             })}
             </div>

             <button type='submit'>Create Videogame</button>

             
        </form>

        </div>
    </div>
)

}