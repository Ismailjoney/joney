import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [showAllData, setShowAllData] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const handleButtonClick = () => {
        setShowAllData(true);
    };

    return (
        <div id="project" className='mt-10'>
            <h2 className='my-14 text-3xl font-bold text-amber-300'>Projects</h2>
            <div className='grid grid-cols-1  justify-items-center gap-8 md:grid-cols-2  lg:grid-cols-3' >
                {
                    projects.slice(0, showAllData ? projects.length : 3).map(project => <ProjectDetails
                        key={project._id}
                        project={project}
                    ></ProjectDetails>)
                }
            </div>

            <div className='flex justify-center my-6'>
                {!showAllData && (
                    <button className="btn btn-outline btn-warning mt-2 w-44 " onClick={handleButtonClick}>See All</button>
                )}
            </div>

        </div>
    );
};

export default Projects;