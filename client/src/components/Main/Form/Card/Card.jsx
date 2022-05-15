import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

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
                <h2>Name: {props.value.name}</h2>
                <p>Fall: {props.value.fall}</p>
                <p>Year: {props.value.year}</p>
                <p> Latitude: {props.value.reclat}</p>
                <p> Longitude: {props.value.reclong}</p>
                <p> Class: {props.value.recclass}</p>
                <p> Mass: {props.value.mass}</p>
                <p> Id: {props.value.id}</p>
<div className='buttons'>
<Button type='delete' onClick={deleteCard} variant='contained'>Delete</Button>
{/* <Button type='edit' onClick={editCard} variant='contained'>Edit</Button> */}
</div>


            </div>
  )
}

export default Card
