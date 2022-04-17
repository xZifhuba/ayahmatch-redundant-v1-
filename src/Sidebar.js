import React from 'react'
import {elastic as Menu} from 'react-burger-menu';
import './Sidebar.css';


const Sidebar = () => {
    return (
        <Menu>
            <h2 className='menuTitle'>Ayahmatch</h2>
            <a href='/'>Home</a>
            <a href='/'>About</a>
        </Menu>

    );
}

export default Sidebar