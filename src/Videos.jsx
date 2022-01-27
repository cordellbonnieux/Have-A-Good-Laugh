import React from 'react';

export default function Videos() {
    return (
        <section id="videos" className="section">
            <div className="section_inner center">
                <div className="section_title">
                    <h2>Videos</h2>
                </div>
                <div>
                    <p>
                        Various live sets captured over the years.
                    </p>
                    <div className="videoWrapper">
                        <h4>Fatum (Russia) - 2019</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/79rSf_4AmVc" title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="videoWrapper">
                        <h4>Asocial (Sweden) - 2018</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2kcmKP2wpzk" title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="videoWrapper">
                        <h4>SexFace (Montreal) - 2016</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LxLScgVn-lQ" title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="videoWrapper">
                        <h4>Fragment (Halifax) - 2018</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tjQ1t2FLmfQ" title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="videoWrapper">
                        <h4>PMS 84 (USA) - 2017</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YYrSCayOAAQ" title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="videoWrapper">
                        <h4>Hellshock (USA) - 2018</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3YAWh0nG-Bc" title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}