import React from 'react';
 

const ProjectDetails = ({ project }) => {
    const { project_name, project_image_one, project_image, project_Details, live_link, client_link, server_link } = project
    return (
            <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-80">
                        <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={project_image_one} alt="project Images" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[56%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 lg:">
                        <h1 className="font-dmserif text-2xl font-bold text-white">{project_name}</h1>
                        <div className="flex justify-center">
                            
                            <div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi cumque sequi excepturi nisi enim nihil accusamus maiores, facilis eaque reiciendis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

    );
};

export default ProjectDetails;