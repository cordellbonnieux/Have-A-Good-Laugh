import React from 'react';
import Tickets from './Tickets';
import LineUp from './LineUp';
import Info from './Info';
import Contact from './Contact';
import Right from './Right';
import Videos from './Videos';
import Header from './Header';

export default function Content() {
    return (
      <div id="content" className="flex">
        <div id="content_left">
          <div className="content_left_inner">
            <Header />
            <Tickets />
            <LineUp />
            <Info />
            <Videos />
            <Contact />
          </div>
        </div>
        <div id="content_right">
          <Right />
        </div>
      </div>
    );
  }
