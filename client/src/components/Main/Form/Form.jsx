import {useForm} from 'react-hook-form';
import React, {useContext, useState} from 'react';
import axios from "axios";
import {landingsContext} from "../../../context/landingsContext";
import Card from "../Form/Card";
import usePagination from '../../../hooks/pagination';
import Pagination from '@mui/material/Pagination';




const Form = () => {

  const all = useContext(landingsContext);
  console.log('esto es lo que me llega por context con all',all)

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;
  const count = Math.ceil(all.length / PER_PAGE);
  const _DATA = usePagination(all, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const { register, handleSubmit } = useForm();

  const createLanding = async(newL) =>{
    const newLanding = {
      name: newL.name,
      id: newL.id,
      nametype: newL.nametype,
      recclass: newL.recclass,
      mass: newL.mass,
      fall: newL.fall,
      year: newL.year,
      reclat: newL.reclat,
      reclong: newL.reclong,
      geolocation: {
        latitude: newL.reclat,
        longitude: newL.reclong
      }
    }


    const res = await axios.post("http://localhost:3000/api/astronomy/landings/create",newLanding);
    const newLand = res.data;
    console.log(newLand)
  
  }

 
  

  return (
    <>
    
    <section className='create_class'>
      <h1>Create a New Landing!!</h1>
      <form onSubmit={handleSubmit(createLanding)}>
        <input {...register("name")} type="text" name="name" placeholder="name"/>
        <input {...register("id")} type="number" name="id" placeholder="id"/>
        <input {...register("recclass")} type="text" name="recclass" placeholder="class"/>
        <input {...register("mass")} type="number" name="mass" placeholder="weight"/>
        <input {...register("year")} type="number" name="year" placeholder="year"/>
        <input {...register("fall")} type="number" name="fall" placeholder="fall"/>
        <input {...register("nametype")} type="number" name="nametype" placeholder="nametype"/>
        <input {...register("reclat")} type="number" name="reclat" placeholder="latitude"/>
        <input {...register("reclong")} type="number" name="reclong" placeholder="longitude"/>
        <input type="submit" value="Create" />
      </form>
    
                              {<div 
                                 className='cardland'>
                                  {_DATA.currentData().map((p, i) => (
                                    <Card key={i} value={p}/>
                                  ))}
                              </div>}
                              <div className='page_class'><Pagination
                                  count={count}
                                  size="large"
                                  page={page}
                                  variant="outlined"
                                  onChange={handleChange}
                                /></div>
              
              </section>
    </>



    
  )
}

export default Form
