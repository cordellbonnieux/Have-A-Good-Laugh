import React from 'react';
import Section from './Section';
import flyer from './images/flyers/hagl2023_anim.gif';
import flyer2 from './images/flyers/hagl2023_still.jpg';
import flyerDisplay from './images/flyers/hagl2023_anim_72dpi_not-wide.gif';


function Header() {
  const content = (
    <header>
      <div id="header_inner">
        <img src={flyerDisplay} id="flyer2022" alt="HAGL 2023 flyer" />
        <div>
          <a href={flyer} target="_blank" rel="noreferrer">
            download the animated flyer
          </a> ||
          <a href={flyer2} target="_blank" rel="noreferrer">
            download the still flyer
          </a>
        </div>
      </div>
    </header>
  );
  return (
    <Section dark={false} title={''} content={content} />
  );
}

export default Header;
