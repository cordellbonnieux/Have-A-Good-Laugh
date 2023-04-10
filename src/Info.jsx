import React from 'react'
import Section from './Section'
import hagl1 from './images/flyers/hagl1.jpg'
import hagl2 from './images/flyers/hagl2.jpg'
import hagl3 from './images/flyers/hagl3.jpg'
import hagl4 from './images/flyers/hagl4.jpg'
import hagl5 from './images/flyers/hagl5.jpg'
import hagl6 from './images/flyers/HAGL2022.jpg'

export default function Info() {
  const content = (
    <div className="left">
      <div id="info_inner_what" className="info_inner_section">
      <h3>What is Have A Good Laugh?</h3>
      <p>
        Have A Good Laugh is a D.I.Y. not-for-profit punk festival in Vancouver, BC, Canada.
        Hosted over various venues, featuring punk (and related genres)
        bands from around the world for 3 days every June, since 2016.
      </p>
      <h4>Flyers/line-ups from previous years:</h4>
      <p>Click on a flyer to download the full sized imaged.</p>
      <div id="oldFlyers" className="center">
        <div className="oldFlyerWrapper">
          <a href={hagl1} target="_blank" rel="noreferrer"><img id="hagl1" className="oldFlyer" src={hagl1} alt="hagl1" /></a>
        </div>
        <div className="oldFlyerWrapper">
          <a href={hagl2} target="_blank" rel="noreferrer"><img id="hagl2" className="oldFlyer" src={hagl2} alt="hagl2" /></a>
        </div>
        <div className="oldFlyerWrapper">
          <a href={hagl3} target="_blank" rel="noreferrer"><img id="hagl3" className="oldFlyer" src={hagl3} alt="hagl3" /></a>
        </div>
        <div className="oldFlyerWrapper">
          <a href={hagl4} target="_blank" rel="noreferrer"><img id="hagl4" className="oldFlyer" src={hagl4} alt="hagl4" /></a>
        </div>
        <div className="oldFlyerWrapper">
          <a href={hagl5} target="_blank" rel="noreferrer"><img id="hagl5" className="oldFlyer" src={hagl5} alt="hagl5" /></a>
        </div>
        <div className="oldFlyerWrapper">
          <a href={hagl6} target="_blank" rel="noreferrer"><img id="hagl6" className="oldFlyer" src={hagl6} alt="hagl6" /></a>
        </div>
      </div>
    </div>
    <div id="info_inner_can" className="info_inner_section">
      <h3>Can my band play Have A Good Laugh?</h3>
      <p>
        Planning for Have A Good Laugh usually starts in August the year prior,
        and the bill is usually filled by October or November.
        If you are interested in playing we encourage you to
        send us your music during this period.
      </p>
    </div>
    <div id="info_inner_where" className="info_inner_section">
      <h3>What venues will the fest be hosted at?</h3>
      <p>
        The Waldorf and The Cambie.
      </p>
    </div>
    <div id="info_inner_allAges" className="info_inner_section">
      <h3>Will Have A Good Laugh be all ages this year?</h3>
      <p>
        Unfortunately not, the entire fest will be +19.
      </p>
    </div>
    <div id="info_inner_tickets" className="info_inner_section">
      <h3>Where can I pick up my tickets?</h3>
      <p>
        Just bring a piece of ID to the door of the gig(s) you bought tickets for and you'll recieve your pass in return.
      </p>
    </div>
  </div>
  );
  return (
    <Section dark={false} title={"Info"} content={content} />
  );
}
