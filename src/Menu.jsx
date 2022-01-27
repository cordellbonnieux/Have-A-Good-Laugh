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
        <div id="menu_left_spacer" />
        <div id="menu_title_wrapper">
          <div className="menu_title font_glass">HAVE A GOOD LAUGH</div>
        </div>
        <div id="menu_mobile_button">
          <button onClick={mobileMenu} className="menu_button font_glass" id="menuBtn" type="button">Menu</button>
        </div>
        <div id="menu_right_spacer" />
      </div>
      <div id="menu_inner">
        <div className="menu_button_wrapper menu_button_wrapper_tickets">
          <a href="#tickets" className="menu_button font_glass">Tickets</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_lineUp">
          <a href="#lineUp" className="menu_button font_glass">Line-up</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_info">
          <a href="#info" className="menu_button font_glass">Info</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_Videos">
          <a href="#videos" className="menu_button font_glass">Videos</a>
        </div>
        <div className="menu_button_wrapper menu_button_wrapper_contact">
          <a href="#contact" className="menu_button font_glass">Contact</a>
        </div>
      </div>
    </div>
  );
}
