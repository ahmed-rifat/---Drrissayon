import React from 'react';
import Rifat from '../../../src/rifat.jpg'

const About = () => {
    return (
        <div className='container mt-5 p-5'>
            <img style={{width: '150px'}} src={Rifat} alt="" />
           <h2 className='mt-3'>Ahmed Rifat</h2>
           <p>I will work for 2 years as a frontend developer, then I will go aboard for a master's degree. After completing my degree I will join a foreign company as a developer.  I have already learned basic HTML CSS3 JavaScript Python and React.js, next I will learn Node.js and TypeScript.
           </p>
        </div>
    );
};

export default About;