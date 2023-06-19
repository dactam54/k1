import React, { useRef, useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import {  Alert } from "react-bootstrap"
import '../sass/css/signin.css'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Profile = () => {

  const emailRef =useRef();
  const passwordRef =useRef();
  const password2Ref =useRef();
  const history =useHistory();

const [error,setError]=useState("");

const {user,updateEmail1,updatePassword1} =UserAuth()

const emailDefault = user && user.email;


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submit')

    if(passwordRef.current.value !== password2Ref.current.value){
      return setError("Mật khẩu không chính xác")
    }

    const promises =[];
    setError("")

    if (emailRef.current.value !== user.email) {
      promises.push(updateEmail1(emailRef.current.value))
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword1(passwordRef.current.value))
    }


    Promise.all(promises)
    .then(() => {
      history.push("/")
    })
    .catch(() => {
      setError("cập nhật thất bại")
    })
    
  }

  return (

    <form className='form'  onSubmit={handleSubmit}>
      <h1 className="title">Cập nhật thông tin</h1>

      <div className='input'>
      {error && <Alert variant="danger">{error}</Alert>}
        <label className='' >Email </label>
        <input  className='' type='email' ref={emailRef}  defaultValue={emailDefault} />
      </div>

      <div className='input'>
        <label className='' >Password</label>
        <input  className='' ref={passwordRef} type='password' />
      </div>

      <div className='input'>
        <label className='' > Password Confirmation</label>
        <input  className='' ref={password2Ref} type='password' />
      </div>

      <button className='btn-sign'>
        Cập nhật
        </button>
        <p className=''>
           
            <Link to='/' >
              Hủy
            </Link>
          </p>



    </form>



  );
}

export default Profile