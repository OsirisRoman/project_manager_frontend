import {
  CREATE_NEW_PROJECT,
  GET_PROJECTS,
  ADD_NEW_PROJECT,
  GET_PROJECT_TASKS,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_NEW_PROJECT:
      return {
        ...state,
        showNewProjectForm: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_NEW_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        showNewProjectForm: false,
      };
    case GET_PROJECT_TASKS:
      return {
        ...state,
        projectTasks: action.payload,
      };
    default:
      return state;
  }
};
