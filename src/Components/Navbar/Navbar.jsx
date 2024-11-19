import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo'/>
      <img 
        src={menu_open} 
        onClick={openMenu} 
        alt="Open menu" 
        className='nav-mob-open' 
        aria-label="Open menu"
      />
      <ul ref={menuRef} className="nav-menu">
        <img 
          src={menu_close} 
          onClick={closeMenu} 
          alt="Close menu" 
          className="nav-mob-close" 
          aria-label="Close menu"
        />
        {["home", "about", "services", "work", "contact"].map(section => (
          <li key={section}>
            <AnchorLink 
              className='anchor-link' 
              href={`#${section}`} 
              offset={50} 
              onClick={() => setMenu(section)}
            >
              <p>{section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}</p>
            </AnchorLink>
            {menu === section && <img src={underline} alt="Underline" />}
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;
