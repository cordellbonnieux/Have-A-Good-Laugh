import React, { useState } from 'react';

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  function mobileMenu() {
    const menuBtns = document.getElementById('menu_inner');
    if (openMenu) {
      setOpenMenu(false);
      menuBtns.style.display = 'none';
    } else {
      setOpenMenu(true);
      menuBtns.style.display = 'block';
    }
  }
  return (
    <div id="menu">
      <div id="menu_bar">
        <div id="menu_title_wrapper" className="left fullWidth">
          <div className="menu_title font_glass">
            <a href="https://haveagoodlaugh.org">
              HAVE A GOOD LAUGH
            </a>
          </div>
        </div>
        <div id="menu_mobile_button" className="right fullWidth">
          <button onClick={mobileMenu} className="menu_button font_glass" id="menuBtn" type="button">Menu</button>
        </div>
      </div>
      <div id="menu_inner">
        <div className="menu_button_wrapper menu_button_wrapper_tickets">
          <a href="#tickets" className="menu_button font_glass">Tickets</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_lineUp">
          <a href="#lineUp" className="menu_button font_glass">Line-up</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_schedule">
          <a href="#schedule" className="menu_button font_glass">Schedule</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_info">
          <a href="#info" className="menu_button font_glass">Info</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_contact">
          <a href="#contact" className="menu_button font_glass">Contact</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_Photos">
          <a href="#content_right" className="menu_button font_glass">Photos</a>
        </div>
      </div>
    </div>
  );
}

/** ADD PHOTOS FOR MOBILE ONLY */
/** HIDE MENU BUTTON ON DESKTOP */