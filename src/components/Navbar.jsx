import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from 'C:/Users/JAI KUMAR D/srt_construction/src/assets/SRTLOGO.png'; // Adjust the path as necessary

const NavBar = () => {
  const [hoverStates, setHoverStates] = useState({
    home: '',
    about: '',
    services: '',
    contact: '',
    blog: '',
  });

  const handleMouseEnter = (e, link) => {
    //if (e.target.classList.contains('active')) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const w = rect.width;

    const left = x < w / 2;
    const right = !left;

    let directionClass = '';
    if (right) {
      directionClass = 'hover-right';
    } else if (left) {
      directionClass = 'hover-left';
    }

    setHoverStates((prevState) => ({ ...prevState, [link]: directionClass }));
  };

  const handleMouseLeave = (e, link) => {
    //if (e.target.classList.contains('active')) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const w = rect.width;

    const left = x < w / 2;
    const right = !left;

    let directionClass = '';
    if (right) {
      directionClass = 'leave-right';
    } else if (left) {
      directionClass = 'leave-left';
    }

    setHoverStates((prevState) => ({ ...prevState, [link]: directionClass }));

    setTimeout(() => {
      setHoverStates((prevState) => ({ ...prevState, [link]: '' }));
    }, 300); // Duration should match the CSS transition duration
  };

  return (
    <nav className="navBar">
      <div><img src={logo} alt="Logo" /></div>
      <ul className="pages">
        <li>
          <NavLink to='/' className={hoverStates.home}
            onMouseEnter={(e) => handleMouseEnter(e, 'home')}
            onMouseLeave={(e) => handleMouseLeave(e, 'home')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={hoverStates.about}
            onMouseEnter={(e) => handleMouseEnter(e, 'about')}
            onMouseLeave={(e) => handleMouseLeave(e, 'about')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/services' className={hoverStates.services}
            onMouseEnter={(e) => handleMouseEnter(e, 'services')}
            onMouseLeave={(e) => handleMouseLeave(e, 'services')}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={hoverStates.contact}
            onMouseEnter={(e) => handleMouseEnter(e, 'contact')}
            onMouseLeave={(e) => handleMouseLeave(e, 'contact')}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='/blog' className={hoverStates.blog}
            onMouseEnter={(e) => handleMouseEnter(e, 'blog')}
            onMouseLeave={(e) => handleMouseLeave(e, 'blog')}>
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
