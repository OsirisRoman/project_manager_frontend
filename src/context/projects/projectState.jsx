import { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import { CREATE_NEW_PROJECT } from '../../types';

const ProjectState = (props) => {
  const initialState = {
    showNewProjectForm: false,
  };

  //Dispatch to run actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const changeShowNewProjectFormState = () => {
    dispatch({
      type: CREATE_NEW_PROJECT,
    });
  };

  return (
    <projectContext.Provider
      value={{
        showNewProjectForm: state.showNewProjectForm,
        changeShowNewProjectFormState,
      }}>
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
