import React from 'react';

function Text({styles,classes, children}) {
    return (
        <div style={{...styles}} className={classes}>
            <p style={{color:"white"}}>{children}</p>
        </div>
    );
}

export default Text;