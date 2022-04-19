import React from 'react';
import data from './data/schedule.json'

export default function Schedule() {
    let trs = [
    <tr>
        <th>Time</th>
        <th>Thursday June 23</th>
        <th>Friday June 24</th>
        <th>Saturday June 25</th>
    </tr>,
    ];
    // this can TOTALLY be refactored
    for (let row = 0; row < 20; row++) {
        let values = [];
        for (let col = 0; col < 4; col++) {
            if (col === 0) {
                values.push(<th>{data.times[row]}</th>);
            } else if (col === 1) {
                let content;
                switch (data.day1[row].type) {
                    case "band": content = <td>{data.day1[row].value}</td>
                        break;
                    case "header": content = <th>{data.day1[row].value}</th>
                        break;
                    case null: content = <td className="transparent"></td>;
                        break;
                    default: content = <td className="transparent"></td>;
                }
                values.push(content)
            } else if (col === 2) {
                let content;
                switch (data.day2[row].type) {
                    case "band": content = <td>{data.day2[row].value}</td>
                        break;
                    case "header": content = <th>{data.day2[row].value}</th>
                        break;
                    case null: content = <td className="transparent"></td>;
                        break;
                    default: content = <td className="transparent"></td>;
                }
                values.push(content)
            } else if (col === 3) {
                let content;
                switch (data.day3[row].type) {
                    case "band": content = <td>{data.day3[row].value}</td>
                        break;
                    case "header": content = <th>{data.day3[row].value}</th>
                        break;
                    case null: content = <td className="transparent"></td>;
                        break;
                    default: content = <td className="transparent"></td>;
                }
                values.push(content)
            }
        }
        let tr = <tr>
            {values[0]}
            {values[1]}
            {values[2]}
            {values[3]}
        </tr>
        trs.push(tr);
    }
    return (
      <section id="lineUp_container" className="section_dark section">
          <div className="section_inner center">
              <div className="section_title">
                  <h2>Schedule</h2>
              </div>
              <table>
                {trs}
              </table>
          </div>
      </section>
    )
}