import React from 'react';

const Exprience = () => {
    return (
        <div className='mt-10'>
            <h2 className='my-14 text-3xl font-bold text-amber-300'>Exprience</h2>
            <div className='grid grid-cols-1 gap-6 justify-items-center align-items-center lg:grid-cols-4'>
                <div>
                    <ul className="steps steps-vertical">
                        <li data-content="✓" className="step step-secondary">HTML 5</li>
                        <li data-content="✓" className="step step-secondary">CSS 3</li>
                        <li data-content="✓" className="step step-secondary">Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <ul className="steps steps-vertical">
                        <li data-content="✓" className="step step-secondary">React Bootstrap</li>
                        <li data-content="✓" className="step step-secondary">daisyUI</li>
                        <li data-content="✓" className="step step-secondary">TailWind</li>
                        <li data-content="✓" className="step step-secondary">Github</li>
                    </ul>
                </div>
                <div>
                    <ul className="steps steps-vertical">
                        <li data-content="✓" className="step step-secondary">Javascript Es6</li>
                        <li data-content="✓" className="step step-secondary">React js</li>
                        <li data-content="✓" className="step step-secondary">Firebase</li>
                        <li data-content="✓" className="step step-secondary">Figma</li>
                    </ul>
                </div>
                <div>
                    <ul className="steps steps-vertical">
                    <li data-content="" className="step step-neutral  "> Basic Exprince</li>
                        <li data-content="✓" className="step step-secondary">Mongodb</li>
                        <li data-content="✓" className="step step-secondary">Express</li>
                        <li data-content="✓" className="step step-secondary">Node js</li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Exprience;