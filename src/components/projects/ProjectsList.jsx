import React from 'react';

import Project from './Project';

const ProjectsList = ({ listOfProjects }) => {
  return (
    <ul className='listado-proyectos'>
      {listOfProjects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
