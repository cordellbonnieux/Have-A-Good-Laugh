import React from 'react';
import Section from './Section';

const ticketInfo1 = {
  title: "ticket 1",
  url: "www.example.com",
  bands: ["band 1", "band 2", "band 3", "etc"]
}

function Tickets() {
  const ticket1 = ticketSection(ticketInfo1)
  const content = (
    <div className="tickets flex">
      {ticket1}
    </div>
  )

  return (
    <Section dark={true} title={'Tickets On Sale Now!'} content={content} />
  )
}

/*
* Band list part needs to be re-worked
*/
function ticketSection(ticketInfo) {
  const { title, url, bands } = ticketInfo;
  const bandList = (bands) => {
    const ul = <ul />;
    for (let i = 0; i < bands.length; i++) {
      const li = <li>{bands[i]}</li>
      ul.appendChild(li)
    }
    return ul
  }
  return (
    <div className={`ticket ${title}`}> 
      <h3>{title}</h3>
      {bandList}
      <a href={url}>{url}</a>
    </div>
  )
}

export default Tickets;