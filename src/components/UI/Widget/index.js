import React from 'react';

function Widget({title,children}) {
    return (
        <div className="widget-item">
            <h4 style={{color:"white"}} className="widget-title">{title}</h4>
            <div className="widget-body">
                {children}
            </div>
        </div>
    );
}

export default Widget;