import React from 'react';
import Tickets from './Tickets';
import LineUp from './LineUp';
import Info from './Info';
import Contact from './Contact';
import Right from './Right';

export default function Content() {
    return (
      <div id="content">
        <div id="content_left">
          <div className="content_left_inner">
            <Tickets />
            <LineUp />
            <Info />
            <Contact />
          </div>
        </div>
        <div id="content_right">
          <Right />
        </div>
      </div>
    );
  }
