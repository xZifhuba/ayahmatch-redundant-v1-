import './Content.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Content = () => { //component for the page contents such as buttons, texts
    const title = 'AyahMatch';
    let navigate = useNavigate();
    return ( 
        <nav className='navbar'> 
        <div className='title'>AyahMatch</div>
        <Sidebar />
        {/*<div className="Content">
            <h1 data-text="AyahMatch" style={{top: '5px'}}>{title}</h1>
            <button onClick={() => {navigate("/")}} className='BtnHome' style={{float: 'right', top: '-50px', right: '40px'}}>Home</button>
            
        
    </div>*/}
        </nav>
        
          
        
    );
}
 
export default Content;