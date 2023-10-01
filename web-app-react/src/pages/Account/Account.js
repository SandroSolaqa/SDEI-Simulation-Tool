import React from 'react'
import './Account.css'
import logo_pic from './graphic_seaDragon.png';
import password_pic from './password.png';
import user_pic from './user.jpeg';
import email_pic from './email.jpeg';

// const picture = new URL("./pages./Account", import.meta.url)

function Account() {
  return (
    <div className="main">

      <div className='logo'>
          <img src={logo_pic}/>
      </div>
      
      <div className="login">
        <h1>SIGN IN</h1>
    
    <div className='username'>
  
      <div className='input'>
            <input type="username" placeholder="username"/>
            {/* <img src={user_pic} /> */}
          </div>
      </div>

      <div className='password'> 
          <div className='input'>
            <input type = "password" placeholder="password"/>
             {/* <img src={user}/> */}
          </div>
      </div>

     
        <div className='button'> 
          <div className='input'>
             <button className='login_btn'> SIGN IN </button>    
          </div>
          
        <div className='button'> 
           <div className='input'>
             <button className='login_btn'> SIGN UP </button>    
           </div>
          
       </div>

        </div>
      </div>
    </div>













  )
}

export default Account

