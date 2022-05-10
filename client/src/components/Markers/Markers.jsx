import React from "react";
import { Marker, Popup } from 'react-leaflet';
import LocationIcon from "../LocationIcon/LocationIcon";

const Markers = (props) => {

  const {landing} = props

    
  return <Marker position={[landing.latitude, landing.longitude]} icon={LocationIcon}>
          <Popup>
            Name: {landing.name} <br /> Landing year: {landing.year}
          </Popup>
        </Marker>;
};

export default Markers;