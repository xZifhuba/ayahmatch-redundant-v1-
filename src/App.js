import React from 'react';
import './App.css';
import Content from './Content';
import Menu from './Menu';
import About from './About';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; //Importing react router terms
import FatihaPage from './Pages/Fatiha/FatihaPage';

function App() { //main App component containing sub-components of the page
  const title = 'AyahMatch';
  return (
    <div className="App">
      <BrowserRouter /*Wrap entire div content with browser router for using route components*/> 
      <Routes /*Routes tag used to contain all the invididual route paths to the pages, route tag is each individual path defined*/>
        <Route path="/" element={<><Content /><Menu /></>}/>
        <Route path="/Fatiha" element={<><Content /><FatihaPage /></>}/>
        <Route path='/About' element={<><Content /><About /> </>}/>

      </Routes>
      
   
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
