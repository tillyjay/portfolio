import React from 'react';

const Circle = ({ radius, fillColor, borderColor, index }) => {

    const drawCircle = (context) => {
        context.beginPath();
        context.arc(radius, radius, radius, 0, 2 * Math.PI, false);
        context.closePath();
    
        context.fillStyle = fillColor;
        context.fill();
    
        context.lineWidth = 2;
        context.strokeStyle = borderColor;
        context.stroke();
    };
    
    return (
        <div id={`circle${index + 1}`}>
            <canvas className="circle" ref={canvas => canvas && drawCircle(canvas.getContext('2d'))} width={radius * 2} height={radius * 2} />
        </div>
    );
};

export default Circle;