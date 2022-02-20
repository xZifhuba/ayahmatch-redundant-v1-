import './Content.css';

const Content = () => { //component for the page contents such as buttons, texts
    const title = 'AyahMatch';
    return ( 
        <div className="Content">
            <h1 data-text="AyahMatch" style={{top: '5px'}}>{title}</h1>
            <button className='BtnHome' style={{float: 'right', top: '-50px', right: '40px'}}>Home</button>
            
        
        </div>
        
          
        
    );
}
 
export default Content;