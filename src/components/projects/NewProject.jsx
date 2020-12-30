import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {
  //Obtain NewProject state
  const contextOfNewProject = useContext(projectContext);
  const {
    showNewProjectForm,
    changeShowNewProjectFormState,
    addProject,
  } = contextOfNewProject;

  //Project State
  const [project, setProject] = useState({
    name: '',
    tasksList: [],
  });

  //Error State
  const [error, setError] = useState(false);

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
      setError(true);
      return;
    }

    //change error state value
    setError(false);

    //Add the project to the context state
    addProject(project);

    //Reset the new project form
    setProject({ ...project, name: '' });
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

      {error ? (
        <p className='mensaje error'>Se requiere un nombre para el Proyecto</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
