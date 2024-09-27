import React from 'react';
import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import Link from './Link';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <Link key={link.id} href={link.href} classname='nav-link'>
                {link.text}
              </Link>
            );
          })}
        </ul>
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                classname='nav-icon'
                target='_blank'
                rel='noreferrer'
              >
                <i className={link.icon}></i>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
