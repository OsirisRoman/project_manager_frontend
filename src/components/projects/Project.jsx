import React, { useContext } from 'react';

import ProjectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {
  //Extracting project from context state
  const contextOfProjects = useContext(ProjectContext);
  const { getActualProjectTasks } = contextOfProjects;

  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => getActualProjectTasks(project)}>
        {' '}
        {project.name}{' '}
      </button>
    </li>
  );
};

export default Project;
