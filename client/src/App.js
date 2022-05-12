import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import axios from 'axios';
import React, {useState, useEffect} from "react";
import {landingsContext} from "./context/landingsContext.jsx";

function App() {
  
  const [all, setAll] = useState([])

  useEffect(() => {
    async function fetchAllLandings(){
        try {
          const res = await axios.get('http://localhost:3000/api/astronomy/landings')
          const allLandings = res.data/* .slice(0,20) */
          
          setAll(allLandings)
         
        } catch (error) {
          console.log('error', error)
      }
    }
    fetchAllLandings();
  },[])

console.log('esto me trae all',all);

  return (
    <div className="App">
     <landingsContext.Provider value={all}>
      <BrowserRouter> 
        <Header/>
        <Main/>
      </BrowserRouter>  
      </landingsContext.Provider>
      <Footer/>
      
    </div>
  );
}

export default App;
