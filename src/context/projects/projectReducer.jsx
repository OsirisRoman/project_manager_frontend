import { CREATE_NEW_PROJECT } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_NEW_PROJECT:
      return {
        ...state,
        showNewProjectForm: true,
      };
    default:
      return state;
  }
};
