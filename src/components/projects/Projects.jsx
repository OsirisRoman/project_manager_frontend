import React, { Fragment, useContext } from 'react';

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
          {Object.keys(projectTasks).length === 0 ? (
            <div className='contenedor-tareas'>
              {' '}
              There is not a selected project{' '}
            </div>
          ) : (
            <Fragment>
              <TaskForm />
              <div className='contenedor-tareas'>
                <TasksList key={projectTasks.id} project={projectTasks} />
              </div>
            </Fragment>
          )}
        </main>
      </div>
    </div>
  );
};

export default Projects;
