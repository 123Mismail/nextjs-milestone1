
import React from 'react'

 

const Header = () => {
  return (
    <div className='main-nav'>
        <header>
            {/* desktop navbar */}
        <nav className='navbar'>
            <span className='logo' style={{fontSize:"2.4rem", fontWeight:"800" ,color:"white", paddingLeft:"1rem"}} >Lo<span style={{color:"orange"}}>go</span></span>
            <ul className='nav-item'>
                <li className='nav-items'><a href="#hero">Home</a></li>
                <li className='nav-items'><a href="#about">About</a></li>
                <li className='nav-items'><a href="#contact">Contact</a></li>
               
                 
            </ul>
        </nav>

       
        </header>
    </div>
  )
}

export default Header