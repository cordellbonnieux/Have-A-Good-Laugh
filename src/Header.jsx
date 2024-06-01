import React from 'react';
import Section from './Section';
import flyer from './images/flyers/2024/hagl2024.jpg';


function Header() {
  const content = (
    <header>
      <div id="header_inner">
        <img src={flyer} id="flyer2024" alt="HAGL 2024 flyer"/>
        <div>
          <a href={flyer} target="_blank" rel="noreferrer">
            download the flyer
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
