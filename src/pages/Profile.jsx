import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Alert } from "react-bootstrap"

import '../sass/css/signin.css'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Profile = () => {
  const { user,updateEmail1, updatePassword1 } = UserAuth()
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");
  const history = useHistory();
  
  const emailDefault = user && user.email;

  function changePassword(e){
    e.preventDefault();
    console.log('submit')

    if(passwordRef.current.value !== password2Ref.current.value){
      return setError("Mật khẩu không chính xác")
    }

    const promises =[];
    console.log(promises)
    setLoading(true)
    setError("")

    if (emailRef.current.value !== user.email) {
      promises.push(updateEmail1(emailRef.current.value))
    }

    if (passwordRef.current.value && passwordRef.current.value !==" ") {
      promises.push(updatePassword1(passwordRef.current.value))
    }


    Promise.all(promises)
    .then(() => {
      
      setError("cập nhật thành công")
      setTimeout(() => {
        history.push("/")
      },3000);
    })
    .catch(() => {
      setError("cập nhật thất bại")
    }).finally(() => {
      setLoading(false)
    })

  }



  return (

    <form className='form' onSubmit={changePassword}>
      <h1 className="title">Cập nhật thông tin</h1>

      <div className='input'>
        {error && <Alert variant="danger">{error}</Alert>}
        <label  >Email </label>
        <input  type='email' ref={emailRef} defaultValue={emailDefault} />
      </div>

      <div className='input'>
        <label  >Password</label>
        <input  ref={passwordRef} type='password' placeholder='Nhập mật khẩu mới' />
      </div>

      <div className='input'>
        <label  > Password Confirmation</label>
        <input  ref={password2Ref} type='password' placeholder='Nhập lại mật khẩu mới' />
      </div>

      <button className='btn-sign' disabled={loading}>
        Cập nhật
      </button>
      <p >

        <Link to='/' >
          Hủy
        </Link>
      </p>



    </form>



  );
}

export default Profile