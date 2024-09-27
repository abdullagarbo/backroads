import React from 'react';
import { pageLinks, socialLinks } from '../data';
import Link from './Link';

function Footer() {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          return (
            <Link key={link.id} href={link.href} classname='footer-link'>
              {link.text}
            </Link>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              classname='footer-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i className={link.icon}></i>
            </Link>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company{''}
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
