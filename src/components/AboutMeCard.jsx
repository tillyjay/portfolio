import React from 'react';

const AboutMeCard = ({title, blurb}) => {

    return (
    <div className="aboutMeCard">
        <h1 id="aboutTitle">{title}</h1>
        <div dangerouslySetInnerHTML={{__html:blurb}} className='para my-4'></div>
    </div>
    );
}


export default AboutMeCard;