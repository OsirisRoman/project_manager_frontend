import React, { useContext } from 'react';

import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import TaskForm from '../tasks/TaskForm';
import TasksList from '../tasks/TasksList';

import ProjectContext from '../../context/projects/projectContext';

const Projects = () => {
  //Extracting project from context state
  const contextOfProjects = useContext(ProjectContext);
  const { projectTasks } = contextOfProjects;

  return (
    <div className='contenedor-app'>
      <Sidebar />

      <div className='seccion-principal'>
        <Navbar />

        <main>
          <TaskForm />
          <div className='contenedor-tareas'>
            {Object.keys(projectTasks).length === 0 ? (
              <div> There is not a selected project </div>
            ) : (
              <TasksList key={projectTasks.id} project={projectTasks} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
