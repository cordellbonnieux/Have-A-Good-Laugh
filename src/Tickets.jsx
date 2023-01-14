import React, {useState, useEffect} from 'react'; 
import Section from './Section';
import ticketData from './data/tickets2023.json';
// maybe i dont need these...
import day1 from './images/flyers/HAGL2022_Day1.jpg';
import day2 from './images/flyers/HAGL2022_Day2.jpg';
import day3 from './images/flyers/HAGL2022_Day3.jpg';
import day0 from './images/flyers/HAGL2022.jpg';

const exampleInfo = {
  title: "ticket",
  url: "www.example.com",
  bands: ["band 1", "band 2", "band 3", "etc"]
}

function Tickets() {
  const [now, setNow] = useState();
  const t0 = ticketData.tickets[0];
  const t1 = ticketData.tickets[1];
  const t2 = ticketData.tickets[2];
  const t3 = ticketData.tickets[3];

  const ticket1 = ticketSection(t1);
  const ticket2 = ticketSection(t2);
  const ticket3 = ticketSection(t3);
  const ticket0 = ticketSection(t0);

  const ticketSalesEndDate = new Date(2023, 6, 15)
  const ticketSalesStartDate = new Date(2023, 2, 5)
  /*
  const content = new Date() < ticketSalesEndDate ? (
    <div>
      <div className="tickets flex">
        {ticket0}
        {ticket1}
        {ticket2}
        {ticket3}
      </div>
      <p>
        All tickets purchased are "will call" (pick up at the door), please make sure to bring a piece of I.D. with you.
      </p>
      <p>
        Due to reduced capacity at the day/after show venue, there will be no presale tickets for these events. 
        Tickets for these shows will be available at the door at the indicated start time listed on the schedule.
      </p>
    </div>
  ) :
  (
    <div className="tickets">
      <p> Presale tickets period has ended, however there will be tickets left at the door of each show, check the 
        <a href="#schedule"> schedule</a> for gig start times to make sure you're on time to get spot!
      </p>
    </div>
  )*/
  const content = () => {
    // change new date to variable now
    if (new Date() < ticketSalesStartDate) {
      return (
        <div className="tickets">
          Tickets go on sale in 
        </div>
      )
    }
    // else if now
  }
  useEffect(() => {
    // make the tickets go boop boop
  }, [now, setNow])

  return (
    <Section dark={true} title={'Tickets'} content={content} />
  )
}

function ticketSection(ticketInfo) {
  const { title, url, bands, description, price, day } = ticketInfo;
  const bandList = bandsList(bands);
  let img;
  let payment;
  switch(day) {
    default: img = null;
      payment = null;
      break;
    case 0 : img = day0;
      payment = tix(0);
      break;
    case 1: img = day1;
      payment = tix(1);
      break;
    case 2: img = day2;
      payment = tix(2);
      break;
    case 3: img = day3;
      payment = tix(3);
  }
  return (
    <div className={`ticket ${title}`}>
      <img src={img} alt={title} />
      <a href={img} target="_blank">
        Download Flyer
      </a>
      <div>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        {bandList}
        {tix(url)}
      </div>
    </div>
  )
}

function bandsList(bands) {
  return (
    <ul>
      {bands.map((band) => (
        <li key={band}>{band}</li>
      ))}
    </ul>
  )
}

function tix(url) {
  return (
    <div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"></input>
        <input type="hidden" name="encrypted" value={url}></input>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  )
}

export default Tickets;