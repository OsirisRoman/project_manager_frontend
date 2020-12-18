import React, { Fragment, useState } from 'react';

const NewProject = () => {
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
      <button className='btn btn-block btn-primario'>New Project</button>
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
    </Fragment>
  );
};

export default NewProject;
