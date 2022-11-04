import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres } from '../../actions';
//import {Link } from 'react-router-dom';
import Card from '../Card/Card';
import Pagination from '../Pagination/pagination'
import Loading from "../Loading/Loading";
import s from "./Home.module.css"



export default function Home() {

const dispatch = useDispatch();
const allGames = useSelector((state) => state.videogames);  //lo mismo que mapStateToProps
const genres = useSelector((state) => state.genres);
    //para el paginado, creamos estados locales
    const [currentPage, setCurrentPage] = useState(1);
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
    dispatch(getGenres());    //lo mismo que mapDispacthToProps
},[dispatch]);
    
    return (
        <div>
            {allGames.length > 0 ? (
            <div>
        <Pagination
            gamesPerPage = {gamesPerPage}
            totalGames = {allGames.length}
            pagination={pagination}
            
        /> 
            <div className={s.cards}>
            {CurrentGames?.map( e =>{
               return (
               <Card name={e.name}
                     img = {e.img}
                     rating = {e.rating} />
           );} )}
            </div>
            </div>
            
            )  : (
                <Loading/>
            ) }
        </div>
    );
   
};