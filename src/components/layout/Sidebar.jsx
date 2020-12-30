import React, { useEffect, useContext } from 'react';

import NewProject from '../projects/NewProject';
import ProjectsList from '../projects/ProjectsList';
import ProjectContext from '../../context/projects/projectContext';

const Sidebar = () => {
  //Extracting project from context state
  const contextOfProjects = useContext(ProjectContext);
  const { projects, getProjects } = contextOfProjects;

  useEffect(() => {
    getProjects();
  }, []);

  //Check if there are projects
  const zeroProjects = projects.length === 0;

  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>

      <NewProject />

      <div className='proyectos'>
        <h2>Your Projects</h2>
        {zeroProjects ? (
          <div> There are no Projects </div>
        ) : (
          <ProjectsList listOfProjects={projects} />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
