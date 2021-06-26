import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [active, setActive] = useState(null)
   let href ;
   useEffect(() => {
       href = window.location.href;
       href === 'http://localhost:3000/' ? setActive(null) : setActive(1)
       
   },[])
  
    return (
        <nav>
            <ul>
                <Link to="/" >
                  <li className={active === null ? 'active cool-link Home' : 'cool-link Home'}  onClick={() => setActive(null)} >Home</li>
                </Link>
                <Link to="/Create">
                  <li className={active === 1 ? 'active cool-link Create' : 'cool-link Create'} href="/Create" onClick={() => setActive(1)} >Create Blog</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
