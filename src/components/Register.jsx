import React from 'react'
import { Link } from 'react-router-dom';

const Register= () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Buat akun dulu yuk!</h3>
            <div className='mb-2'>
                <label htmlFor='username'>Username</label>
                <input type='username' placeholder='Enter Username' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='confirm'>Confirm Password</label>
                <input type='confirm' placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>Sign Up</button>
            </div>
            <p className='text-end mt-2'>
                Already Registered<Link to='/' className='ms-2'>Sign In</Link>
            </p>
        </form>
        </div>
    </div>
  )
}

export default Register;