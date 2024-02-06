import React from 'react';
import parse from 'html-react-parser'

function SectionTitle(props) {
    return (
        <div className={`section-title ${props.variant === "light" ? "section-title--light" : ""}`}>
            <h3>{props.title}</h3>
            <h6>{parse(props.heading)}</h6>
            {(() => {
                if (props.text) {
                    return <p>{parse(props.text)}</p>
                }
                if (props.tagline) {
                    return <h5 className="tagline">{parse(props.tagline)}</h5>
                }
            })()}
        </div>
    );
}

export default SectionTitle;