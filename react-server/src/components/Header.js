import React from 'react'
import Navbar from './Navbar'
const Header = () => {
    return (
        
        <div className="header_container">
            <div className="header_container_logo" ><a href="/">BLOGS</a></div>
            <div className="header_container_list">
              <Navbar />
            </div>
        </div>
    )
}

export default Header
