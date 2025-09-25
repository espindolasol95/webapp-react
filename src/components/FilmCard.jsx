import React from 'react'

const FilmCard = ({film}) => {
  return (
    <div>
       <div className='col-12 col-md-6 col-lg-4'>
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
             </div>
            
    </div>
  )
}

export default FilmCard
