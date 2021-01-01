import { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import {
  CREATE_NEW_PROJECT,
  GET_PROJECTS,
  ADD_NEW_PROJECT,
  GET_ACTUAL_PROJECT_TASKS,
  REMOVE_PROJECT,
} from '../../types';

const ProjectState = (props) => {
  //Simulated data retrieved from the database
  const projects = [
    {
      id: 1,
      name: 'Ecommerce',
      tasksList: [
        { id: 1, name: 'Choose Platform', state: true },
        { id: 2, name: 'Choose Colors', state: false },
        { id: 3, name: 'Choose Payment Platform', state: false },
        { id: 4, name: 'Choose Hosting', state: true },
      ],
    },
    {
      id: 2,
      name: 'Ecommerce',
      tasksList: [],
    },
    {
      id: 3,
      name: 'Intranet',
      tasksList: [],
    },
    {
      id: 4,
      name: 'Website Mockup',
      tasksList: [],
    },
  ];

  const initialState = {
    //Projects and its task
    projects: [],
    showNewProjectForm: false,
    actualProject: {},
  };

  //Dispatch to run actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const changeShowNewProjectFormState = () => {
    dispatch({
      type: CREATE_NEW_PROJECT,
    });
  };

  //Get projects from database
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  //Get task from a selected project
  const getActualProjectTasks = (project) => {
    dispatch({
      type: GET_ACTUAL_PROJECT_TASKS,
      payload: project,
    });
  };

  //Add new projects
  const addProject = (project) => {
    project.id = uuidv4();
    dispatch({
      type: ADD_NEW_PROJECT,
      payload: project,
    });
  };

  //Remove a given project
  const removeProject = (projectId) => {
    dispatch({
      type: REMOVE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        showNewProjectForm: state.showNewProjectForm,
        projects: state.projects,
        actualProject: state.actualProject,
        changeShowNewProjectFormState,
        getProjects,
        addProject,
        getActualProjectTasks,
        removeProject,
      }}>
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
