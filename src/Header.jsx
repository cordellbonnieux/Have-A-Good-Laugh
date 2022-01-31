import React from 'react';
import Section from './Section';
import flyer from './images/flyers/HAGL2022.jpg';

function Header() {
  const content = (
    <header>
      <div id="header_inner">
        <img src={flyer} id="flyer2022" alt="HAGL 2022 flyer" />
        <div>
          <a href={flyer} target="_blank" rel="noreferrer">
            Download The Flyer
          </a>
        </div>
      </div>
    </header>
  );
  return (
    <Section dark={true} title={''} content={content} />
  );
}

export default Header;
