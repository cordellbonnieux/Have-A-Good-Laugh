import React from 'react'
import one from './images/ass.jpg'
import two from './images/thomas-bryce.jpg'
import three from './images/tom.jpg'
import four from './images/james-alex.jpg'
import five from './images/infa.jpg'
import six from './images/fatum.jpg'
import seven from './images/tyler-jamo.jpg'
import eight from './images/jump.jpg'
import nine from './images/biff.jpg'
import ten from './images/cali.jpg'

export default function Right() {
  return (
    <div className="content_right_inner">
      <img src={one} className="content_right_img content_right_img_1" alt="Alf House" />
      <img src={three} className="content_right_img content_right_img_3" alt="Napalm Raid" />
      <img src={two} className="content_right_img content_right_img_2" alt="Fans at the Astoria" />
      <img src={four} className="content_right_img content_right_img_4" alt="a couple of good ol boys" />
      <img src={five} className="content_right_img content_right_img_5" alt="Infa Riot" />
      <img src={six} className="content_right_img content_right_img_1" alt="Fatum" />
      <img src={seven} className="content_right_img content_right_img_3" alt="No Klasse" />
      <img src={eight} className="content_right_img content_right_img_2" alt="Porvenir Oscuro" />
      <img src={nine} className="content_right_img content_right_img_5" alt="The Varukers" />
      <img src={ten} className="content_right_img content_right_img_5" alt="Fans at the Astoria" />
    </div>
  );
}
