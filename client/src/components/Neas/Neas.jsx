import React, {useState, useEffect} from "react";
import axios from "axios";
import a1 from '../../assets/asteroid_1.png';
import a2 from '../../assets/asteroid_2.png';
import a3 from '../../assets/asteroid_3.png';
import a4 from '../../assets/asteroid_4.png';
import a5 from '../../assets/asteroid_5.png';

function Neas() {

  const [neas, setNeas] = useState([]);
 /*  const [value, setValue] = useState('');
  const [quant, setQuantity] = useState(''); */
  const asteroids = [a1,a2,a3,a4,a5];
  const randomImg = () => {
    const random = Math.floor(Math.random() * (5 - 0) + 0);
    return random;
  }


  useEffect(() => {
    const fetchData = async() =>{
    try{
      const res = await axios.get("http://localhost:3000/api/astronomy/neas/");
      const data = await res.data;
      setNeas(data);
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }
    fetchData();
  }, []);

 /*  const handleSubmit = (event) => {
    event.preventDefault();

    const content = event.target.elements.text.value;
    const quantity = event.target.elements.num.value;
    setValue(content);
    setQuantity(quantity)
  } */

if(neas){
  return (<>

   {/*  <form onSubmit={handleSubmit}>
    <div className="landignsReq">
      <label htmlFor="content">Search by Orbit_class: </label>
      <input type="text" name='text'/><br/>
      <label htmlFor="num">Quantity: </label>
      <input type="text" name='num' placeholder="..Quantity"/>
    </div>

    <input type="submit" value='Search'/>
  </form> */}

    <div 
      className='neas_cards'>
       {neas.map(n => (
<>
<div className='card_nea'>
<h2>Name: {n.orbit_class}</h2>
<img src={asteroids[randomImg()]} alt="asteroids" className="astIcon"/>
<div className='text_nea'>
<p>Year: {n.discovery_date}</p>
<p>Designation: {n.designation}</p>
<p>H_mag: {n.h_mag}</p>
<p>Moid_au: {n.moid_au}</p>
<p>Q_au_1: {n.q_au_1}</p>
<p>Q_au_2: {n.q_au_2}</p>
<p>Period_yr: {n.period_yr}</p>
<p>I_deg: {n.i_deg}</p>
<p>Pha: {n.pha}</p>
</div>
</div>
</>   

       ))}
  
   </div>
  
   </>)
  
}
} 

export default Neas
