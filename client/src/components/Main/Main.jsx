import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Landings from '../Landings';
import Neas from '../Neas';
import Form from './Form';
import LDetails from './LDetails';

const Main = () => {
  return <main>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/landings' element={<Landings/>}/>
            <Route path='/neas' element={<Neas/>}/>
            <Route path='/list' element={<Form/>}/>
            <Route path='/list/landings/details/:id' element={<LDetails/>}/>
          </Routes>
        </main>;
};

export default Main;