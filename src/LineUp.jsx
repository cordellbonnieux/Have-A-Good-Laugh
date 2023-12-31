import React from 'react';
import data from './data/lineup2024.json';

export default function LineUp() {
  const output = [];
  const { bands } = data;
  for (let i = 0; i < data.bands.length; i += 1) {
    let { music } = bands[i];
    const { name, location } = bands[i];
    /*
    const name = data.bands[i].name;
    const location = data.bands[i].location;
    let music = data.bands[i].music;
    */
    let idName = name.replaceAll(' ', '').replaceAll('.', '').replaceAll('-', '').toLowerCase()
    if (music.length < 1) {
      music = "return false"
    }
    output.push(
      <div className="band_container" key={i}>
        <a href={music} target="_blank" rel="noreferrer">
          <div className="band_logo" id={idName} />
          <p>
            {name}
            &nbsp;|&nbsp;
            {location}
          </p>
        </a>
      </div>,
    );
  }
  output.sort(() => Math.random() - 0.5);
  return (
    <section id="lineUp_container" className="section">
      <h1>2023 Fest Line-up</h1>
      <p>Click on a band&apos;s logo to hear their music.</p>
      <div id="lineUp">
        {output}
      </div>
    </section>
  );
}
