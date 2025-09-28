import React from 'react'
import { Link } from 'react-router-dom';

const FilmCard = ({film}) => {
   console.log("Film card:", film); 
  return (
    <div className='col-12 col-md-6 col-lg-4'>
        <Link to={`/films/${film.id}`}>
        <div className="card-film">
            <img src={`http://localhost:3000/img/${film.image}`} 
                className='film-cover'
                alt={film.title}
                />
                <div className='overlay'>
                    <h1>{film.title}</h1>
                    <p>{film.genre}</p>
                    <p>{film.director}</p>
                </div>
        </div>
        </Link>
     
    </div>
      
  )
}

export default FilmCard
