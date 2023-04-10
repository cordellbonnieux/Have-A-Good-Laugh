import React, {useState, useEffect} from 'react'; 
import Section from './Section';
import url from './data/ticket2023url.json'
import url1 from './data/ticket2023url_1.json'
import url2 from './data/ticket2023url_2.json'
import url3 from './data/ticket2023url_3.json'
import flyer1 from './images/flyers/2023/day1.jpg'
import flyer2 from './images/flyers/2023/day2.jpg'
import flyer3 from './images/flyers/2023/day3.jpg'

// TODO: actually properly componentize this!

function Tickets() {
  // component content
  let content = (
    <div>
      <div className="tickets">
        <h3>HAGL2023: FULL PASS</h3>
        <h4>Full access pass to all gigs listed on the schedule.</h4>
        <p>
          Two ways to pay: Paypal or E-Transfer.
          Tickets are will call, bring government issued I.D. with you.
          Waldorf shows are +19, Bullet Farm shows are all-ages.
        </p>
        <div id="paymentMethods">
          <div className="paymentMethod">
            <h4>Option #1: E-Transfer</h4>
            <ul>
              <li>Transfer $100 CAD/per ticket to thoughtdecayrecords@gmail.com</li>
              <li>Put the full name of each ticket holder in the description</li>
              <li>Make the secret question "full pass" without quotations</li>
              <li>Make the secret question answer "hagl" without quotations</li>
              <li>If no names are entered in the description we will refuse the payment</li>
              <li>If your payment has gone through, your tickets have been added to the willcall list</li>
              <li>If you have any problems, use the contact form below</li>
            </ul>
          </div>
          <div className="paymentMethod">
            {tix(url.url)}
          </div>
        </div>
      </div> 
      {singleDayPass(url1.url, 1, flyer1)}
      {singleDayPass(url2.url, 2, flyer2)}
      {singleDayPass(url3.url, 3, flyer3)}
    </div>
  )

  return (
    <Section dark={true} title={'Tickets'} content={content} />
  )
}

function singleDayPass(url, dayNum, flyerImg) {
  return (
    <div className="singleDayPass">
      <div>
      <img src={flyerImg} alt="HAGL 2023 flyer" />
      </div>
      <div>
        <h3>Day {dayNum} Main Gig Ticket (@ The Waldorf)</h3>
        <p>
          Paypal or E-Transfer, your name(s) will be on the list, night of the event so bring I.D.
        </p>
        <div className='SingleDayPaymentMethods'>
          <div className="paymentMethod">
            <h4>Option #1: E-Transfer</h4>
            <ul>
              <li>Transfer $30 CAD/per ticket to thoughtdecayrecords@gmail.com</li>
              <li>Put the full name of each ticket holder in the description</li>
              <li>Make the secret question "day{dayNum}" without quotations</li>
              <li>Make the secret question answer "hagl" without quotations</li>
              <li>If no names are entered in the description we will refuse the payment</li>
              <li>If your payment has gone through, your tickets have been added to the willcall list</li>
              <li>If you have any problems, use the contact form below</li>
            </ul>
          </div>
          <div className="paymentMethod">
            {tix(url)}
          </div>
        </div>
      </div>
    </div>
  )
}

function tix(url) {
  return (
    <div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"></input>
        <input type="hidden" name="encrypted" value={url}></input>
        <h4>Option #2: Pay with Paypal</h4>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  )
}


export default Tickets;