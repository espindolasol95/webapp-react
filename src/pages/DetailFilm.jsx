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
        const res = await axios.get(`http://localhost:3001/api/films/${id}`);
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
