import React from 'react';

import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import TaskForm from '../tasks/TaskForm';
import TasksList from '../tasks/TasksList';

const Projects = () => {
  //Projects and its task
  const projects = [
    {
      name: 'Ecommerce',
      tasksList: [
        { name: 'Choose Platform', state: true },
        { name: 'Choose Colors', state: false },
        { name: 'Choose Payment Platform', state: false },
        { name: 'Choose Hosting', state: true },
      ],
    },
  ];
  return (
    <div className='contenedor-app'>
      <Sidebar />

      <div className='seccion-principal'>
        <Navbar />

        <main>
          <TaskForm />
          <div className='contenedor-tareas'>
            {projects.map((project, index) => (
              <TasksList key={index} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
