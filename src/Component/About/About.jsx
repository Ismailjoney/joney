import React from 'react';
import joneytwo from '../../assets/joneytwo.png'

const About = () => {
    const handdleDownLoadResume =() => {
        window.location.href=`https://drive.google.com/file/d/1fr3Rm7w5i_gJcRqsAUr9quMhbki-65yU/view?usp=share_link`
    }
    return (
        <div>
            <h2 className='my-14 text-3xl font-bold text-amber-300'>About me</h2>
            <div className='grid grid-cols-1 gap-6 justify-items-center align-items-center lg:grid-cols-2'>
                <div className='flex justify-center align-items-center'>
                    <img className="w-50 h-50 rounded" src={joneytwo} />
                </div>
                <div>
                   <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit reprehenderit molestiae nisi nemo consequatur. Modi accusamus doloremque natus reprehenderit facilis, sapiente fugit earum est alias reiciendis aspernatur! Ullam, laborum cum?
                   </p>
                    <button className="btn btn-outline btn-warning mt-2" onClick={handdleDownLoadResume}>Download Resume</button>
                </div>
            </div>
        </div>

    );
};

export default About;