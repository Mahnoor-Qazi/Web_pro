import React, { useContext, useEffect, useRef, useState } from 'react';
import './Login.scss';
// import { adminCredentials } from '../utils/data';
import { useNavigate } from 'react-router-dom';
import { addUser, getUsers } from '../api';

function Login() {
  const [user, setUser] = useState({});
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const result = await getUsers();
    setUser(result);
  }

  const submitHandler = (e) => {
    e.preventDefault();;

    const userName = usernameRef.current.value;
    const userPassword = passwordRef.current.value;
    console.log("usr :",user.userName);
    if (userName.trim() === "abc" || userPassword.trim() === "123") {
      navigate('/admin');
      return;
    } else {
      setError('Invalid username or password!');
    }
  }

  return (
    <div className='login'>
      <form action='' className='form' onSubmit={submitHandler}>
        <div className='header'>Login</div>
        <div className='input'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' ref={usernameRef} />
        </div>
        <div className='input'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' ref={passwordRef} />
        </div>
        <div className='action'>
          <button type='submit'>Login</button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Login;
