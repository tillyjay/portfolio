
import React from 'react';

const Circle = ({ diameter, fillColor, borderColor, index, pageType }) => {
    const style = {
       width: `${diameter}px`,
       height: `${diameter}px`,
       borderRadius: '50%',
       border: '2px solid black',
       backgroundColor: fillColor,
       borderColor: borderColor,
    };
    
    //construct id based on index
    const circleId = `circle${pageType}${index + 1}`;
    

    return <div id={circleId} style={style}></div>;
};
   
export default Circle;