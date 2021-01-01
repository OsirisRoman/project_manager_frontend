import {
  CREATE_NEW_PROJECT,
  GET_PROJECTS,
  ADD_NEW_PROJECT,
  GET_ACTUAL_PROJECT_TASKS,
  REMOVE_PROJECT,
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
    case GET_ACTUAL_PROJECT_TASKS:
      return {
        ...state,
        actualProject: action.payload,
      };
    case REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        actualProject: {},
      };
    default:
      return state;
  }
};
