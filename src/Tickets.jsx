import React from 'react';
import Section from './Section';

const exampleInfo = {
  title: "ticket",
  url: "www.example.com",
  bands: ["band 1", "band 2", "band 3", "etc"]
}

function Tickets() {
  const ticket1 = ticketSection(exampleInfo);
  const ticket2 = ticketSection(exampleInfo);
  const ticket3 = ticketSection(exampleInfo);
  const ticket4 = ticketSection(exampleInfo);
  const content = (
    <div className="tickets flex">
      {ticket1}
      {ticket2}
      {ticket3}
      {ticket4}
    </div>
  )

  return (
    <Section dark={true} title={'Tickets'} content={content} />
  )
}

function ticketSection(ticketInfo) {
  const { title, url, bands } = ticketInfo;
  const bandList = bandsList(bands);
  return (
    <div className={`ticket ${title}`}> 
      <h3>{title}</h3>
      {bandList}
      <a href={url}>{url}</a>
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

export default Tickets;