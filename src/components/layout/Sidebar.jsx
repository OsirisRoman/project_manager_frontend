import React from 'react';

import NewProject from '../projects/NewProject';
import ProjectsList from '../projects/ProjectsList';

const Sidebar = () => {
  //List Of Projects
  const listOfProjects = [
    { name: 'Ecommerce' },
    { name: 'Intranet' },
    { name: 'Website Mockup' },
  ];
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>

      <NewProject />

      <div className='proyectos'>
        <h2>Your Projects</h2>

        <ProjectsList listOfProjects={listOfProjects} />
      </div>
    </aside>
  );
};

export default Sidebar;
