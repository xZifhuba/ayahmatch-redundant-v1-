import './Content.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Content = () => { //component for the page contents such as buttons, texts
    const title = 'AyahMatch';
    let navigate = useNavigate();
    return ( 
    
        <Sidebar /> 
        
    );
}
 
export default Content;