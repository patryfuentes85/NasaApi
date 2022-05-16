import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Card(props) {
 const landing = props.value


  const deleteCard = async () => {
    try {
     const res = await axios.delete(`http://localhost:3000/api/astronomy/landings/delete/${landing.id}`)
     const data = res.data;

    } catch (error) {
      console.log(error);
    }
   }

   /* const editCard = async () => {
    try {
     const res = await axios.put(`http://localhost:3000/api/astronomy/landings/delete/${landing.id}`)
     const data = res.data;

    } catch (error) {
      console.log(error);
    }
   } */



  return (
    
    <div className="card_class">
      <Link to={`/list/landings/details/${props.value.id}`}>
                <h2>Name: {props.value.name}</h2></Link>
                <p>Year: {props.value.year}</p>
                <p> Id: {props.value.id}</p>
<div className='buttons'>
<Button type='delete' onClick={deleteCard} variant='contained'>Delete</Button>
{/* <Button type='edit' onClick={editCard} variant='contained'>Edit</Button> */}
</div>


            </div>
            
  )
}

export default Card
