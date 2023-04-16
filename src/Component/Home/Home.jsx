import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Exprience from '../Exprience/Exprience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
 

const Home = () => {
    return (
        <div className='mt-30'>
            <Banner></Banner>
            <About></About>
            <Service></Service>
           <Exprience></Exprience>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;