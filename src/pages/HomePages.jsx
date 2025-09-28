import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
const HomePages = () => {
    //definisco variabile di stato 
    const [films,setfilms] = useState ([])
    //creo la funzione per recuperare i film attraverso la chiamata ajax
    const fetchFilms = () => {
        axios.get("http://localhost:3000/api/films").then ((resp)=>{
            setfilms(resp.data)
            //console.log(resp.data)

        })
        .catch ((err)=> console.log(err))
    }

    //uso useEffect per recuperare la lista 
    useEffect(() => {
        fetchFilms();
    }, []);
    
  return (
    <div className='container'>
        <div className="row">
          <div className="col-12 text-center">
            <h1>BOOLFILMS</h1>
            <h2>Watch movies and TV shows</h2>
          </div>
          </div>
          <div className="row gy-3">
           
           {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
        </div>
    </div>
  );
}

export default HomePages;
