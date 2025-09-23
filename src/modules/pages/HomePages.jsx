import React from 'react';

const HomePages = () => {
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
