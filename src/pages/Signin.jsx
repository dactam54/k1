import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../sass/css/signin.css'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      history.push('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    
      <form onSubmit={handleSubmit} className='form'>

        <h1 className='title'>Đăng nhập</h1>

        <div className='input'>
          <label className=''>Email </label>
          <input onChange={(e) => setEmail(e.target.value)} className='' type='email' placeholder='Nhập Email' required />
        </div>

        <div className='input'>
          <label className=''>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='' type='password' placeholder='Nhập mật khẩu '/>
        </div>

        <button className='btn-sign'>
         Đăng nhập
        </button>

        <p className=''>
            
            <Link to='/forgetpassword'>
              Quên mật khẩu
            </Link>
          </p>

          <p className=''>
            Bạn chưa có tài khoản?{' '}
            <Link to='/signup' className='sign'>
              Đăng kí ngay
            </Link>
          </p>

      </form>



  );
};





export default Signin;
