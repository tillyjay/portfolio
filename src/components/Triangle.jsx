import React from 'react';

const Triangle = ({ base, height, fillColor, borderColor, index}) => {

    const drawTriangle = (context) => {
        context.beginPath();
        context.moveTo(0, 0); // Starting point
        context.lineTo(base, 0); // Base of the triangle
        context.lineTo(base / 2, height); // Height of the triangle
        context.closePath();
    
        context.fillStyle = fillColor;
        context.fill();
    
        context.lineWidth = 2;
        context.strokeStyle = borderColor;
        context.stroke();
     };
    
     return (
    <div id={`triangle${index + 1}`}>
     <canvas className="triangle" ref={canvas => canvas && drawTriangle(canvas.getContext('2d'))} width={base} height={height} />
    </div>
     );
    
};
    

export default Triangle;