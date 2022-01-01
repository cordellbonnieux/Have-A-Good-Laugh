import React from 'react';

export default function Info() {
  return (
    <div id="info" className="section_dark">
      <div id="info_inner">
        <div id="info_title">
          <h1 id="faq">Info and F.A.Q.&apos;s</h1>
        </div>
        <div id="info_inner_what" className="info_inner_section">
          <h2>What is Have A Good Laugh?</h2>
          <p>
            Have A Good Laugh is a D.I.Y. not-for-profit punk festival in Vancouver, BC, Canada.
            Hosted over various venues, featuring punk (and related genres)
            bands from around the world for 3 days every June, since 2016.
          </p>
          <h3>Flyers/line-ups from previous years:</h3>
          <div id="oldFlyers">
            <div id="hagl1" className="oldFlyer" />
            <div id="hagl2" className="oldFlyer" />
            <div id="hagl3" className="oldFlyer" />
            <div id="hagl4" className="oldFlyer" />
            <div id="hagl5" className="oldFlyer" />
          </div>
        </div>
        <div id="info_inner_can" className="info_inner_section">
          <h2>Can my band play Have A Good Laugh?</h2>
          <p>
            Planning for Have A Good Laugh usually starts in August the year prior,
            and the bill is usually filled by October or November.
            If you are interested in playing we encourage you to
            send us your music during this period.
          </p>
        </div>
        <div id="info_inner_when" className="info_inner_section">
          <h2>When can I buy tickets?</h2>
          <p>
            Tickets go on sale, right here on Febuary 5th.
          </p>
        </div>
        <div id="info_inner_where" className="info_inner_section">
          <h2>What venues will the fest be hosted at?</h2>
          <p>
            Check back here for updates, all locations, times etc will be posted
            here once we figure it all out.
          </p>
        </div>
        <div id="info_inner_allAges" className="info_inner_section">
          <h2>Will Have A Good Laugh be all ages this year?</h2>
          <p>
            That is our plan, however we are currently working out the
            details of our liquor license. We will confirm this when tickets
            go on sale.
          </p>
        </div>
      </div>
    </div>
  );
}
