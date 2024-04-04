
import React from 'react';

const Circle = ({ diameter, fillColor, borderColor, index }) => {
    const style = {
       width: `${diameter}px`,
       height: `${diameter}px`,
       borderRadius: '50%',
       border: '2px solid black',
       backgroundColor: fillColor,
       borderColor: borderColor,
};
   
    return <div id={`circle${index + 1}`} style={style}></div>;
};
   
export default Circle;