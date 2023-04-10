import React from 'react';
import data from './data/schedule2023.json'
import Section from './Section'

export default function Schedule() {
    let trs = [
    <tr>
        <th>Time</th>
        <th>Thursday June 22</th>
        <th>Friday June 23</th>
        <th>Saturday June 24</th>
    </tr>,
    ];
    // this can TOTALLY be refactored
    // the row number must match the number of rows in the schedule
    for (let row = 0; row < 18; row++) {
        let values = [];
        for (let col = 0; col < 4; col++) {
            const randomKey = col + "" + row + "" + Math.random() * 1000
            if (col === 0) {
                values.push(<th key={randomKey}>{data.times[row]}</th>);
            } else if (col === 1) {
                let content;
                switch (data.day1[row].type) {
                    case "band": content = <td key={randomKey}>{data.day1[row].value}</td>
                        break;
                    case "header": content = <th key={randomKey}>{data.day1[row].value}</th>
                        break;
                    case null: content = <td className="transparent" key={randomKey}></td>;
                        break;
                    default: content = <td className="transparent" key={randomKey}></td>;
                }
                values.push(content)
            } else if (col === 2) {
                let content;
                switch (data.day2[row].type) {
                    case "band": content = <td key={randomKey}>{data.day2[row].value}</td>
                        break;
                    case "header": content = <th key={randomKey}>{data.day2[row].value}</th>
                        break;
                    case null: content = <td className="transparent" key={randomKey}></td>;
                        break;
                    default: content = <td className="transparent" key={randomKey}></td>;
                }
                values.push(content)
            } else if (col === 3) {
                let content;
                switch (data.day3[row].type) {
                    case "band": content = <td key={randomKey}>{data.day3[row].value}</td>
                        break;
                    case "header": content = <th key={randomKey}>{data.day3[row].value}</th>
                        break;
                    case null: content = <td className="transparent" key={randomKey}></td>;
                        break;
                    default: content = <td className="transparent" key={randomKey}></td>;
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
    const content = (
        <div>
            <table>
                {trs}
            </table>
            <div className="autoMargin">
                <div className="left">
                    <h3>Venues</h3>
                    <ul>
                        <li>
                            The Waldorf - 1489 E. Hastings St (side entrance)
                        </li>
                        <li>
                            The Cambie - 300 Cambie St
                        </li>
                        <li>
                            undisclosed location will be revealed at the day 3 main gig
                        </li>
                        <li>
                            "~" denotes approximate start times
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    return (
        <Section dark={true} title={"Schedule"} content={content} />
    )
}