import React, { Fragment } from 'react';

import Task from './Task';

const TasksList = ({ project }) => {
  const tasksList = project.tasksList;

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

      <button type='button' className='btn btn-eliminar'>
        Remove Project &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
