import { useReducer, useState } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = (props) => {
  const initialState = {
    showProject: false,
  };

  //Dispatch to run actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <projectContext.Provider
      value={{
        showProject: state.showProject,
      }}>
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
