import React, { Fragment, useContext } from 'react';

import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import TaskForm from '../tasks/TaskForm';
import TasksList from '../tasks/TasksList';

import ProjectContext from '../../context/projects/projectContext';

const Projects = () => {
  //Extracting project from context state
  const contextOfProjects = useContext(ProjectContext);
  const { actualProject } = contextOfProjects;

  return (
    <div className='contenedor-app'>
      <Sidebar />

      <div className='seccion-principal'>
        <Navbar />

        <main>
          {Object.keys(actualProject).length === 0 ? (
            <h2 className='contenedor-tareas'>
              {' '}
              There is not a selected project, please Select a Project{' '}
            </h2>
          ) : (
            <Fragment>
              <TaskForm />
              <div className='contenedor-tareas'>
                <TasksList key={actualProject.id} project={actualProject} />
              </div>
            </Fragment>
          )}
        </main>
      </div>
    </div>
  );
};

export default Projects;
