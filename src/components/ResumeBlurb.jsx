import React from 'react';

const ResumeBlurb = ({title, blurb}) => {

    return (
    <div className="resumeBlurb">
        <h1 id="resumeTitle">{title}</h1>
        <div dangerouslySetInnerHTML={{__html:blurb}} className='para my-4'></div>
    </div>
    );
}


export default ResumeBlurb;