import React from 'react';

const Triangle = ({ base, height, fillColor, borderColor, index, pageType, imageUrl }) => {

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
        <div id={triangleId} style={{ position: 'relative' }}>
            <canvas className="triangle" ref={canvas => canvas && drawTriangle(canvas.getContext('2d'))} width={base} height={height} />
            {imageUrl && (
                <img src={imageUrl} alt="" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', //ensures image covers entire triangle area
                    zIndex: 1 //places the image above the canvas
                }}/>
            )}
        </div>
     );
    
};
    

export default Triangle;