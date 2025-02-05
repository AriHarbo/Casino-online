import React from 'react'
import BackButton from '../utils/BackButton'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <div>
      <BackButton/>
      <div className='contenedorRegister'>
        <h1>Harbet</h1>
        <form >
          <div className='registerData1'>
          <label className='labelRegister'>
            Username
            <input type="text" placeholder="example123" />
          </label>
          <label className='labelRegister'>
            Email
            <input type="text" placeholder="example@harbet.com" />
          </label>
          <label className='labelRegister'>
            Password
            <input type="password" placeholder="********" />
          </label>
          <label className='labelRegister'>
            Confirm Password
            <input type="password" placeholder="********" />
          </label>
          </div>
          <div className='registerData2'>
          <label className='labelRegister'>
            First Name
            <input type="text" placeholder="example123" />
          </label>
          <label className='labelRegister'>
            Last Name
            <input type="text" placeholder="example123" />
          </label>
          <label className='labelRegister'>
            Date of Birth
            <input type="date"/>
          </label>
          </div>
          <button type="submit" className='formButton' id='botonRegister'>
            Sign Up
          </button>
          <p>Already have an account? Log in <Link className='colorSecundario' to="/login">here.</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
