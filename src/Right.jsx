import React from 'react'
import one from './images/mess2023.jpg'
import two from './images/ass.jpg' 
import three from './images/tom.jpg'
import four from './images/crowd2023.jpg'
import five from './images/infa.jpg'
import six from './images/fatum.jpg'
import seven from './images/tyler-jamo.jpg'
import eight from './images/mark2022.jpg'
import nine from './images/biff.jpg'
import ten from './images/thomas-bryce.jpg'

export default function Right() {
  return (
    <div className="content_right_inner">
      <img src={one} className="content_right_img content_right_img_1" alt="Mess 2023" />
      <img src={two} className="content_right_img content_right_img_2" alt="Don Don 2019" />
      <img src={three} className="content_right_img content_right_img_3" alt="Napalm Raid 2019" />
      <img src={four} className="content_right_img content_right_img_4" alt="Crowd shot 2023" />
      <img src={five} className="content_right_img content_right_img_5" alt="Infa Riot" />
      <img src={six} className="content_right_img content_right_img_1" alt="Fatum 2019" />
      <img src={seven} className="content_right_img content_right_img_3" alt="No Klasse 2019" />
      <img src={eight} className="content_right_img content_right_img_2" alt="Dead  Cells 2022" />
      <img src={nine} className="content_right_img content_right_img_5" alt="The Varukers 2019" />
      <img src={ten} className="content_right_img content_right_img_5" alt="Fans at the Astoria 2019" />
    </div>
  );
}
