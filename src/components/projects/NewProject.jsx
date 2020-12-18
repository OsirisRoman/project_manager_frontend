import React, { Fragment } from 'react';

const NewProject = () => {
  return (
    <Fragment>
      <button className='btn btn-block btn-primario'>New Project</button>
      <form className='formulario-nuevo-proyecto'>
        <input
          type='text'
          className='input-text'
          placeholder='Your Project Name Here!'
          name='name'
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
