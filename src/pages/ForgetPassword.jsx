import React, {useState,useRef } from 'react';
import { Link, } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../sass/css/ForgetPassword.css'
import { Alert} from "react-bootstrap"

const ForgetPassword = () => {
  const emailRef = useRef()
  const { resetPassword } = UserAuth();
  const [message, setMessage] = useState("")

  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      
      await resetPassword(emailRef.current.value)
      setMessage("Vui lòng kiểm tra hòm thư email")
      
    } catch {
      console.log("Failed to reset password")
    }
  };

  return (
    
      <form onSubmit={handleSubmit} className='form'>

        <h1 className='title'>Quên mật khẩu</h1>

        <div className='input'>
        {message && <Alert variant="success">{message}</Alert>}
          <label className=''>Email </label>
          <input className='' type='email' ref={emailRef} required placeholder='Nhập Email'/>
        </div>

        <button className='btn-sign'>
        Cấp lại mật khẩu
        </button>
        
        <p className=''>
          <Link to='/signin' className='sign'>
            Đăng nhập
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





export default ForgetPassword;
