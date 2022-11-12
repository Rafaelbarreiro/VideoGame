import React from "react";
import { useState, useEffect } from "react";
import {Link, useHistory} from 'react-router-dom';
import {getGenres, getPlatforms, postVideogames} from '../../actions/index';
import { useDispatch, useSelector } from "react-redux";
import s from "./Create.module.css"

export default function  VideogameCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const genres = useSelector((state) => state.genres)
    const plataforma = useSelector((state) => state.platforms)
    const allVideogames = useSelector((state) => state.videogames)
    const [error, setError] = useState({});

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

    function validate(input){
        let error={};
        if (!input.name) {
            error.name = "Name is required";
            
          } else if (input.name.length > 50) {
            error.name = "Name is too long";
          } else if (allVideogames.find(e => e.name.toLowerCase() === input.name.toLowerCase()) ){
            error.name = `The name ${input.name} is allready exist`
          }
         if (!input.description){
            error.description = "Description is required";
        } else if (input.description.length > 1000) {
            error.description = "Description is too long. (Max = 1000 characters)";
          }

        if (!input.released){
            error.released = "Date is required";
        }
        if(!input.rating){
            error.rating = "Rating is Required";
        } else if( !Math.floor(input.rating) ) {
            error.rating = "Type of input must be Number"
        }
        else if (input.rating > 5 || input.rating < 0) {
            error.rating = "Rating must range between 0 to 5";
          }
        if (!input.img) {
            error.img = "Image URL is required";
          }
        if (input.platforms.length === 0) {
            error.platforms = "Minimun one Platform is required";
          }
         

        return error
    }

       
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        })) 
    }
    


   /*  function handleCheckGenre(e){
        if(e.target.checked){
            setInput({
                ...input,
                genre:  [...input.genre,e.target.value]
            })
        }
         setError(
            validate({
              ...input,
              genres: [...input.genre, e.target.value],
            })
          );  
    }*/
    function handleSelectGenres(e) {
        // let filt = input.genres.filter(e=> e === e.target.name)
        // console.log(filt)
    
        if (!input.genre.includes(e.target.value)) {
          setInput({
            ...input,
            genre: [...input.genre, e.target.value],
          });
          setError(
            validate({
              ...input,
              genre: [...input.genre, e.target.value],
            })
          );
        } else {
          setInput({
            ...input,
          });
        }
      };
    function handleDeleteGenres(e){
        setInput({
            ...input,
            genre: input.genre(el => el !==e )
        })
    }  
   
    function handleCheckPlatform(e){
        if(e.target.checked){
            setInput({
                ...input,
                platforms:[...input.platforms,e.target.value]
            })
        }
        setError(
            validate({
              ...input,
              platforms: [...input.platforms, e.target.value],
            })
          );
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postVideogames(input));
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        })) 
        setInput({
            name: "",
            description:"",
            released:"",
            rating:"",
            img:"",
            platforms:[],
            genre:[]
        });

        alert("Videogame created succesfully")
        history.push('/home')
        window.location.reload('/home');
    }
  console.log(genres)
   
    
return(
    <div className={s.bg}>
        <div>
        <Link to= '/home'><button>Home</button></Link>
        <h2>Create a New Videogame</h2>
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
            <div>
                <label>Name*:</label>
                <input className={s.input}
                onChange={handleChange}
                type= "text"
                value= {input.name}
                name= "name"
                />
                {error.name && <span >{error.name}</span>}
            </div>

            <div>
                <label>Released:</label>
                 <input
                 onChange={handleChange}
                 type="date"
                 value={input.released}
                 name="released"
                />
                {error.released && <span className={s.red}>{error.released}</span>}
             </div>

             <div>
                <label>Rating:</label>
                 <input
                 onChange={handleChange}
                 
                 type="float"
                 value={input.rating}
                 name="rating"
                />
                {error.rating && <span className={s.red}>{error.rating}</span>}
             </div>

             <div>
                <label>Imagen:</label>
                 <input
                 onChange={handleChange}
                 type="text"
                 value={input.img}
                 name="img"
                />
                {error.img && <span className={s.red}>{error.img}</span>}
             </div>
             <div>
            <p>Description*:</p>
            <textarea
            onChange={handleChange}
              type="text"
              value={input.description}
              name="description"
            />
            {error.description && <span className={s.red}>{error.description}</span>}
          </div>
             </div>

            <div className={s.select}> 
          
             <h1>Genre:</h1>
             <br></br>
             {/* <div id="itemForm">
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
             {error.genres && <span className={s.red}>{error.genres}</span>}
             
             </div> */}
             <div>
            <p>Genres</p>
            <select  className={s.thisInput} onChange={(e) => handleSelectGenres(e)}>
              <option value="all">All</option>
              {genres?.map((e) => {
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
    
          </div>
          <div className={s.selected}>
            {input.genre?.map((e) => {
              return (
                <>
                  <div>{e}</div>
                  <button onClick={() => handleDeleteGenres(e)}>X</button>
                </>
              );
            })}{" "}
          </div>
             <div>
            <h1>Platform*:</h1>
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
              {error.platforms && <span className={s.red}>{error.platforms}</span>} 
              </div>
             </div>
          {   (!error.name && !error.description && !error.platforms)?
           
                <button id="submitButton" type='submit'  >Create Videogame</button> :
                <h2>Missing some obligatories dates</h2>
             
             }
             

             
        </form>

        </div>
    </div>
)

}