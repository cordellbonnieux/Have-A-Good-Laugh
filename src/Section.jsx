import React from 'react';

/*
*   Add the titles h1 into the sections somehow
*/
export default function Section(props) {
    const classes = props.dark ? "section section_dark" : "section";
    const id = props.title.toLowerCase();
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
        <section id={id} className={classes}>
            <div className="section_inner center">
                {titleWrapper}
                {props.content}
            </div>
        </section>
    );
}