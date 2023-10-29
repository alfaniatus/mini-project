import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Masuk Disini</h3>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>Sign In</button>
            </div>
            <p className='text-end mt-2'>
                Forgot <a href="">Password?</a><Link to='/signup' className='ms-2'>Sign Up</Link>
            </p>
        </form>
        </div>
    </div>
  )
}

export default Login;