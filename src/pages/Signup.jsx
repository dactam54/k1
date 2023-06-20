import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../sass/css/signin.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      history.push('/Layout')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    
     
      <form onSubmit={handleSubmit} className='form'>
      <h1 className='title'>Đăng kí</h1>

        <div className='input'>
          <label className=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className=''
            type='email'
            required
            placeholder='Nhập Email'
          />
        </div>

        <div className='input'>
          <label className=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className=''
            type='password'
            placeholder='Nhập mật khẩu '
          />
        </div>
        <button className='btn-sign'>
          Đăng kí
        </button>
        
        <p className=''>
          Bạn đã có tài khoản?{' '}
          <Link to='/signin' className='sign'>
            Đăng nhập
          </Link>
        </p>
    
      </form>


  );
};

export default Signup;
