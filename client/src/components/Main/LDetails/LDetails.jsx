import React, {useContext} from 'react';
import {landingsContext} from "../../../context/landingsContext";
import {useParams} from "react-router-dom";

function LDetails(props) {
  const all = useContext(landingsContext);
  console.log('esto es lo que me llega a details',all)

  let { id } = useParams();
  const info = all.filter(land =>  land.id == id )
  const selected = info[0];
  console.log(selected);

  return (
    <div>
      <h1>Name: {selected.name}</h1>
      <p>Year: {selected.year}</p>
      <p>Id: {selected.id}</p>
      <p> Latitude: {selected.reclat}</p>
      <p> Longitude: {selected.reclong}</p>
      <p>Fall: {selected.fall}</p>
      <p> Class: {selected.recclass}</p>
      <p> Mass: {selected.mass}</p>
      
    </div>

  )
}

export default LDetails
