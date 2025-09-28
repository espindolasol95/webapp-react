import React from 'react';

const DetailFilm = () => {
  return (
    <div className='container'>  
     <div className="row">
      <div className="col-12">
        <div className="detail card">
          <div className="d-flex">
            <div className="cover img">
              <img src={film.cover} alt={film.title} />
            </div>
            <div className='text-details ms-3'>
              <h2>{film.title}</h2>
              <p>{film.description}</p>
              <h4>recensioni</h4>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div> 
  )
}

export default DetailFilm;
