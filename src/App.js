import './App.css';
import Content from './Content';
import Menu from './Menu';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() { //main App component containing sub-components of the page
  const title = 'AyahMatch';
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Surah1">Surah1</Link>

      </nav>
      <Routes>
        <Route path="/" element={<><Content /><Menu /></>}/>
        <Route path="/Surah1" element={<Content />}/>

      </Routes>
      
   
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
