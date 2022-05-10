import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';


function Home() {
  const [info, setInfo] = useState('');
  
  useEffect(() => {
    async function fetchimage(){
        try {
          const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=4N3RGJQyDLinolyEO5E40YA0cKNubQdPxAyc4Kbi`)
          const data = res.data

          const infoHome = {
            'img': res.data.url,
            'title': res.data.title
          }
          setInfo(infoHome)
          console.log('esto es res', res.data.url)
        } catch (error) {
          console.log('error', error)
      }
    }
    fetchimage();
  },[])

  return (
    <section className='home'>
      <h2>{info.title}</h2>
      <img src={info.img} alt="imgDay" />
    </section>
  )
}
export default Home







