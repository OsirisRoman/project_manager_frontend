import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
  //Registering State
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const onUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    //To avoid empty fields
    if (
      user.firstname === '' ||
      user.lastname === '' ||
      user.email === '' ||
      user.password === '' ||
      user.confirmpassword === ''
    )
      return;

    console.log(user);
  };

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Create New Account</h1>

        <form onSubmit={register}>
          <div className='campo-form'>
            <label htmlFor='firstname'>First Name</label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              placeholder='First Name'
              value={user.firstName}
              onChange={onUserChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='lastname'>Last Name</label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='Last Name'
              value={user.lastName}
              onChange={onUserChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              value={user.email}
              onChange={onUserChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={user.password}
              onChange={onUserChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmpassword'
              name='confirmpassword'
              placeholder='Confirm Password'
              value={user.confirmpassword}
              onChange={onUserChange}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Register'
            />
          </div>
        </form>
        <Link to={'/'} className='enlace-cuenta'>
          Go To Home Page
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
