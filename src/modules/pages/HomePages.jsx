import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

const HomePages = () => {
    //definisco variabile di stato 
    const [films,setfilms]=usestate ([])
    //creo la funzione per recuperare i film attraverso la chiamata ajax
    const fetchFilms= () =>{
        axios.get('http://localhost:3000/api/film').then ((resp)=>{
            setfilms(resp.data)
            console.log(resp.data)

        })
        .catch ((err)=> console.log(err))
    }

    //uso useEffect per recuperare la lista 
    useEffect (fetchFilms, [])
  return (
    <div className='container'>
        <div className="row">
          <div className="col-12 text-center">
            <h1>BOOLFILMS</h1>
            <h2>Watch movies and TV shows</h2>
          </div>
          </div>
          <div className="row gy-3">
          <div className='col-12 col-md-6 col-lg-4'>
            <div className="card-film">
                <img src="./" 
                className='film-cover'
                alt="film" />
                <div className='overlay'>
                    <h1>Title</h1>
                    <p>Genre</p>
                    <p>Director</p>
                </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default HomePages;
