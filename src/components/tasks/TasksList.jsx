import React, { Fragment, useContext } from 'react';

import Task from './Task';

import projectContext from '../../context/projects/projectContext';

const TasksList = ({ project }) => {
  const tasksList = project.tasksList;

  const contextState = useContext(projectContext);
  const { removeProject } = contextState;

  return (
    <Fragment>
      <h2>Project: {project.name}</h2>
      <ul className='listado-tareas'>
        {tasksList.length === 0 ? (
          <li className='tarea'>
            <p>There are no Tasks</p>
          </li>
        ) : (
          tasksList.map((task) => <Task key={task.id} task={task} />)
        )}
      </ul>

      <button
        type='button'
        className='btn btn-eliminar'
        onClick={() => removeProject(project.id)}>
        Remove Project &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
