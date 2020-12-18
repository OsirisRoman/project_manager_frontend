import React, { Fragment } from 'react';

import Task from './Task';

const TasksList = ({ project }) => {
  console.log(project);
  console.log(project.tasksList);
  const tasksList = project.tasksList;
  console.log(tasksList);

  return (
    <Fragment>
      <h2>Project: {project.name}</h2>
      <ul className='listado-tareas'>
        {tasksList.length === 0 ? (
          <li className='tarea'>
            <p>There are no Tasks</p>
          </li>
        ) : (
          tasksList.map((task, index) => <Task key={index} task={task} />)
        )}
      </ul>
    </Fragment>
  );
};

export default TasksList;
