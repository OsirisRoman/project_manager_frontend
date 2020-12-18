import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  //Login state
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onFormChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    //To avoid empty fields
    if (user.email === '' || user.password === '') return;
    console.log(
      `Login with email: '${user.email}' and password: '${user.password}'`
    );
  };

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>

        <form onSubmit={login}>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your email here!'
              value={user.email}
              onChange={onFormChange}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Your password here!'
              value={user.password}
              onChange={onFormChange}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Login'
            />
          </div>
        </form>
        <Link to={'/new_account'} className='enlace-cuenta'>
          Create New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
