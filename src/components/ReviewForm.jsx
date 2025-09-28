import React, {useState}from 'react'
import axios from 'axios'

const ReviewForm = ({movieId,onNewReview}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [vote, setVote] = useState(5);

  const handleSubmint = async (e) => {
    e.preventDefault ()

    try {
      const res = await axios.post(`http://localhost:3000/api/films/${movieId}/reviews`, {
        name,
        text,
        vote
      })
      console.log(res.data);
      onNewReview({ name, text, vote }); // aggiorna la lista delle recensioni
      setName('');
      setText('');
      setVote(5);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      
    </div>
  )
}
