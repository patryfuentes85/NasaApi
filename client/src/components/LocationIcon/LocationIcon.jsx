import L from 'leaflet';

const LocationIcon = L.icon({
  iconUrl: require ('../../assets/iconAst.png'),
  /* iconRetinaUrl: require ('../../assets/iconAst.png'), */
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [30, 30],
})

export default LocationIcon;