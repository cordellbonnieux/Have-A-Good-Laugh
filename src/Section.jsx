import React from 'react';

export default function Section(props) {
    const classes = props.dark ? "section section_dark" : "section";
    const title = props.title.charAt(0).toUpperCase() + props.title.slice(1)
    return(
        <section id={props.title} className={classes}>
            <div className="section_inner center">
                <div className="section_title">
                    <h2>{title}</h2>
                </div>
                {props.content}
            </div>
        </section>
    );
}