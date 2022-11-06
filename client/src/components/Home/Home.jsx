import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, clear, orderByName, orderByRating } from '../../actions/index';
import Card from '../Card/Card';
import Pagination from '../Pagination/pagination'
import Loading from "../Loading/Loading";
import NavBar from '../NavBar/Nav';
import s from "./Home.module.css"



export default function Home() {

const dispatch = useDispatch();
const allGames = useSelector((state) => state.videogames);  // eslint-disable-next-line
const genres = useSelector((state) => state.genres); // eslint-disable-next-line
const [order, setOrder] = useState(''); 
    //para el paginado, creamos estados locales
    const [currentPage, setCurrentPage] = useState(1);// eslint-disable-next-line
    const [gamesPerPage, setGamesPerPage] = useState(15);  //declaramos 15 por pag
//const [order, setOrder] = useState("");
const indexOfLastGame = currentPage * gamesPerPage //15 en pag 1 -- 30 en pag 2
const indexOfFirstGame = indexOfLastGame - gamesPerPage //0
const CurrentGames = allGames.slice (indexOfFirstGame, indexOfLastGame);

const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)              //seteo la pag en el numero de pag
}

useEffect (() => {
    dispatch(getVideogames()); 
    dispatch(getGenres()); 
    dispatch(clear());   //lo dejo????
},[dispatch]);

function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);  
    setOrder(`Ordenado ${e.target.value}`)
}
function handleRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
}

    
    return (
        <div >
            <div className={s.nav}>
            <NavBar  setCurrentPage={setCurrentPage}  />
            <div/>
            {allGames.length > 0 ? (
            <div className={s.bg}>
                <div>
                
            <select onChange={e => handleSort(e)}  className={s.selected}>
                      <option value='Alphabetical Order'> Order By Name</option>  
                    <option value='AZ'>  A-Z </option>
                    <option value='ZA'>  Z-A </option>
            </select>

            <select onChange={e => handleRating(e)}  className={s.selected}>
                      <option value='Rating Order'> Order By Rating</option>  
                    <option value='Menor'>  More Rating </option>
                    <option value='Mayor'>  Less Rating </option>
            </select>
        <Pagination
            gamesPerPage = {gamesPerPage}
            totalGames = {allGames.length}
            pagination={pagination}
            
        /> 
            <div className={s.cards}>
            {CurrentGames?.map( e =>{
               return (
                <li key={e.id}>
               <Card name={e.name}
                     img = {e.img}
                     rating = {e.rating}
                     id = {e.id} />
                </li>
           );} )}
            </div>
            </div>
            </div>
            )  : (
                <Loading/>
            ) }
            </div>
        </div>
    );
   
};