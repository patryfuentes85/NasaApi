import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Landings from '../Landings';
import Neas from '../Neas';

const Main = () => {
  return <main>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/landings' element={<Landings/>}/>
            <Route path='/neas' element={<Neas/>}/>
          </Routes>
        </main>;
};

export default Main;
