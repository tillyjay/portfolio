import React from 'react';

const Triangle = ({ base, height, fillColor, borderColor, index, pageType }) => {

    const drawTriangle = (context) => {
        context.beginPath();
        context.moveTo(0, 0); //starting point
        context.lineTo(base, 0); //base of the triangle
        context.lineTo(base / 2, height); //height of triangle
        context.closePath();
    
        context.fillStyle = fillColor;
        context.fill();
    
        context.lineWidth = 2;
        context.strokeStyle = borderColor;
        context.stroke();
     };
    
    //construct id based on pageType and index
    const triangleId = `triangle${pageType}${index + 1}`;
     
     return (
    <div id={triangleId}>
        <canvas className="triangle" ref={canvas => canvas && drawTriangle(canvas.getContext('2d'))} width={base} height={height} />
    </div>
     );
    
};
    

export default Triangle;