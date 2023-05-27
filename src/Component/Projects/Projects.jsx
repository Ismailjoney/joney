import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';

const Projects = () => {
    const [showAllData, setShowAllData] = useState(false);

     const {data : projects = [], isLoading} = useQuery({
        queryKey : ['projects'],
        queryFn :  async () => {
            const res = await fetch(`http://localhost:5000/projects`)
            const data =await res.json()
            return data;
        }
     })
     if(isLoading){
        return <Loading></Loading>
     }

    

    const handleButtonClick = () => {
        setShowAllData(true);
    };

    return (
        <div id="project" className='mt-10'>
            <h2 className='my-14 text-3xl font-bold text-amber-300'>Projects</h2>
            <div className='grid grid-cols-1  justify-items-center gap-6 md:grid-cols-2  md:gap-8 lg:grid-cols-3 lg:gap-6 ' >
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