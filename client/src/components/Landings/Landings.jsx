import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer , Marker, Popup} from 'react-leaflet';
import Markers from '../Markers';
import "./Landings.css"
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import LocationIcon from "../LocationIcon/LocationIcon";

function Landings() {
  
 /// creo los estados -- y las funciones que modificarán dichos estados
   const [value, setValue] = useState('');
   const [selected, setSelected] = useState('');
   const [landings, setLandings] = useState([]);
   const [quant, setQuantity] = useState('');

   console.log(landings);
   useEffect(() => {
    async function fetchLanding(){
      // if(selected){
        try {
          const res = await axios.get(`http://localhost:3000/api/astronomy/landings/${selected}/${value}`)
          const json = res.data
          //Antes de hacer el map hacemos un filter para sacar de la petición http los elementos a los que les faltan campos
          if (quant !== '') {
            setLandings(json.slice(0,`${quant}`))
          } else {
            setLandings(json)
         }
          console.log('esto me trae landings', landings);
        } catch (error) {
          console.log('error', error)
        // }
      }
    }
    fetchLanding();
  }, [selected, value, quant])


  const handleSubmit = (event) => {
    event.preventDefault();

    const selection = event.target.elements.selection.value;
    const content = event.target.elements.text.value;
    const quantity = event.target.elements.num.value;
    setValue(content.toUpperCase());
    setSelected(selection);
    setQuantity(quantity)
    paintMarkers()
  }

const paintMarkers = () => {
    return landings.map((landing, i) =><Markers landing={landing} key={i}/>)
  }
    return <>
  <form onSubmit={handleSubmit}>
    <div className="landignsReq">
      <label htmlFor="selection">Search by: </label>
      <select name="selection">
        <option value="class">Class</option>
        <option value="mass">Mass</option>
      </select>
      <input type="text" name='text'/><br/>
      <label htmlFor="num">Quantity: </label>
      <input type="text" name='num' placeholder="..Quantity"/>
    </div>

    <input type="submit" value='Search'/>
  </form>
  <div id="map">
    <MapContainer center={[30, 0]} zoom={3} scrollWheelZoom={false} className="mapCont">
      <TileLayer attribution='&copy; 
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {landings.map(landing=>landing.reclat?<Marker position={[landing.reclat, landing.reclong]} icon={LocationIcon}>
          <Popup>
            Name: {landing.name} <br /> Landing year: {landing.year}
          </Popup>
        </Marker>:null)}
    </MapContainer>
  </div>
  </>;

}

export default Landings
