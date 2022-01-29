import React from 'react';

export default function Section(props) {
    const classes = props.dark ? "section section_dark" : "section";
    let titleWrapper;
    if (props.title.length > 1) {
        const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);
        const titleWrapper = (
            <div className="section_title">
                <h2>{title}</h2>
            </div>
        );
    }
    
    return(
        <section id={props.title} className={classes}>
            <div className="section_inner center">
                {titleWrapper}
                {props.content}
            </div>
        </section>
    );
}