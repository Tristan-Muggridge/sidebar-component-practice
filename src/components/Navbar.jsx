import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { SidebarData } from './SidebarData';

import './Navbar.css'

function Navbar() {
  
    const [sidebar, setSideBar] = useState(false);
    const HandleSidebarClick = () => setSideBar(!sidebar);

    return (
    <>
    <IconContext.Provider value={{color: "#f1faee"}}>
    <div className="navbar">
        <Link to='#' className='menu-bars'>
            {
                sidebar 
                    ? <AiIcons.AiOutlineClose onClick={HandleSidebarClick}/> 
                    : <FaIcons.FaBars onClick={HandleSidebarClick}/> 
            }
        </Link>
    </div>
    
    <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
        <ul className="nav-menu-items" onClick={HandleSidebarClick}>
            {
                SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.icon}</span>
                                <span>{item.title}</span>
                            </Link> 
                        </li>
                    )
                })
            }
        </ul>    
    </nav>

    </IconContext.Provider>
    </>
  )
}

export default Navbar