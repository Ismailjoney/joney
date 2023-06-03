import React from 'react';


const About = () => {
    const handdleDownLoadResume = () => {
        window.location.href = `https://drive.google.com/file/d/1fr3Rm7w5i_gJcRqsAUr9quMhbki-65yU/view?usp=share_link`
    }
    return (
        <div id='contact'>
            <h2 className='my-6 text-3xl font-bold text-amber-300'>About me</h2>
            <div className='grid grid-cols-1 gap-6 justify-items-center align-items-center lg:grid-cols-2 '>

                <div>
                    <p className='text-base'>
                        
                        I am a MERN Stack developer who learned and was certified by Programming Hero Bangladesh. I have done many full-stack projects with React and Node js. I am an expert in Html5, CSS3, Bootstrap5, React Bootstrap,   JavaScript es6, React JS, firebase Authentication system. I Know Express JS, Node JS, MongoDB and I allso work in jwt token.
                    </p>

                    <button className="btn btn-outline btn-warning mt-4" onClick={handdleDownLoadResume}>Download Resume</button>
                </div>
            </div>
        </div>

    );
};

export default About;