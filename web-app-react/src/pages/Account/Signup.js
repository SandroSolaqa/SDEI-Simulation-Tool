import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './Signup.css';
import Signup_img from './signup_img.jpg';
import {Link} from "react-router-dom";

function Signup() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };


  return (
    <div className="main">
      <div className='Signup-pic'> 
        <div className='Signup-img'>
          <img src={Signup_img} alt="Signup" />
        </div>
      </div>

      <div className="signup">
        <h1>SIGN UP</h1>

        <div className='username'>
          <div className='input'>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: 'Username is required' }}
              render={({ field }) => <input {...field} placeholder="Username" />}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
        </div>

        <div className='DOB'>
          <div className='input'>
            <Controller
              name="dob"
              control={control}
              defaultValue=""
              rules={{ required: 'DOB is required' }}
              render={({ field }) => <input {...field} placeholder="DOB" />}
            />
            {errors.dob && <p>{errors.dob.message}</p>}
          </div>
        </div>

        <div className='phone-number'> 
          <div className='input'>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{ required: 'Phone number is required' }}
              render={({ field }) => <input {...field} type="number" placeholder="Phone" />}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
        </div>

        <div className='email'>
          <div className='input'>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required' }}
              render={({ field }) => <input {...field} type="email" placeholder="Email" />}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>

        <div className='password'> 
          <div className='input'>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password is required' }}
              render={({ field }) => <input {...field} type="password" placeholder="Password" />}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        <div className='password'> 
          <div className='input'>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{ 
                required: 'Confirm Password is required',
                validate: value => value === control.getValues(" ") || 'Passwords do not match'
              }}
              render={({ field }) => <input {...field} type="password" placeholder="Confirm Password" />}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}


            
          </div>
        </div>

        <div> 
          <div>
            <button className='btn-link-container' onClick={handleSubmit(onSubmit)}>
            <a className="btn-link" href="./Home">SIGN UP</a> 
            </button>
          </div>  

          <div>
            <button className='btn-existing-user-container'>
              <Link className="exist-user" to="/Account">Existing User?</Link>  
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;