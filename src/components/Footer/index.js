import React from 'react';

import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Built with <img src={purpleHeart} alt="Heart" /> by{' '}
        <a
          className="footer_description__name"
          href="https://github.com/gabrielnafuzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gabriel nafuzi
        </a>
      </p>
    </footer>
  );
}

export default Footer;
