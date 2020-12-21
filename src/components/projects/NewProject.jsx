import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {
  //Obtain NewProject state
  const contextOfNewProject = useContext(projectContext);
  const {
    showNewProjectForm,
    changeShowNewProjectFormState,
  } = contextOfNewProject;

  //Project State
  const [project, setProject] = useState({
    name: '',
  });

  const onChangeForm = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    //Validate the project name form field
    if (project.name === '') {
      console.log('the project name can not be empty');
      return;
    }

    console.log(project);
  };

  return (
    <Fragment>
      <button
        className='btn btn-block btn-primario'
        onClick={changeShowNewProjectFormState}>
        New Project
      </button>
      {showNewProjectForm ? (
        <form className='formulario-nuevo-proyecto' onSubmit={onSubmitForm}>
          <input
            type='text'
            className='input-text'
            placeholder='Your Project Name Here!'
            name='name'
            value={project.name}
            onChange={onChangeForm}
          />

          <input
            type='submit'
            className='btn btn-primario btn-block'
            value='Add New Project'
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
