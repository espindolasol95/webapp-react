import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

const DetailFilm = () => {
  const {id} =useParams ()
  
  const [film, setFilm] = useState (null)
  const [loading, setLoading] = useState (true)

    useEffect(() => {
    const getFilm = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/films/${id}`);
        setFilm(res.data); 
      } catch (err) {
        console.error(err);
        setFilm(null);
      } finally {
        setLoading(false);
      }
    };
    getFilm();
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (!film) return <p>Film non trovato</p>;

  return (
    <div className='container my-4'>  
     <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <div className="detail card card shadow-sm p-3">
          <div className="d-flex row g-3 align-items-start">
            <div className="cover img ">
               <img src={`http://localhost:3000/img/${film.image}`} alt={film.title} className=' col-12 col-md-4' />
             </div>
            <div className='text-details ms-3'>
              <h2>{film.title}</h2>
              <p>{film.description}</p>
              <p>{film.director}</p>
              <p>{film.genre}</p>
              <p>{film.release_year}</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div> 
  )
}

export default DetailFilm;
