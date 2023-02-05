import React, {useState, useEffect} from 'react'; 
import Section from './Section';
import url from './data/ticket2023url.json'


function Tickets() {
  const [now, setNow] = useState(new Date());
  const ticketSalesEndDate = new Date(2023, 6, 15)
  const ticketSalesStartDate = new Date(2023, 2, 5)

  let content = (
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
  )

  useEffect(() => {
    // make the tickets go boop boop
  }, [now, setNow])

  return (
    <Section dark={true} title={'Tickets'} content={content} />
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