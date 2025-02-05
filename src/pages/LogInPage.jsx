import React from 'react'
import BackButton from '../utils/BackButton'
import { Link } from 'react-router-dom'

const LogInPage = () => {
  return (
    <div>
      <BackButton />
      <img className="imagenSlots" src="/images/maquina.png" alt="Imagen de maquina de slots" />
      <div className='contenedorFormulario'>
        <h1>Harbet</h1>
        <form >
          <label className='labelLogin'>
            Username or Email
            <input type="text" placeholder="example@harbet.com" />
          </label>
          <label className='labelLogin'>
            Password
            <input type="password" placeholder="***********" />
          </label>
          <button type="submit" className='formButton' id='botonLogin1'>
            Log In
          </button>
          <div className="separator">
            <span>or</span>
          </div>
          <Link to="/signup" className='formButtonLink'>
            Join Now
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LogInPage
