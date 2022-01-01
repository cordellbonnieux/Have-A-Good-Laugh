import React from 'react';
import flyer from './images/flyers/HAGL2022.jpg';

export default function Tickets() {
  return (
    <div id="tickets" className="section_dark">
      <div id="tickets_inner">
        <div id="countdown">
          <h1>Tickets on sale February 5th!</h1>
        </div>
        <a href={flyer} target="_blank" rel="noreferrer">
          <img src={flyer} id="flyer2022" alt="HAGL 2022 flyer" />
        </a>
      </div>
    </div>
  );
}
