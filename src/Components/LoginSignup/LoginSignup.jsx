import React, { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'

export const LoginSignup = () => {
    const [action, setAction] = useState('Login');
  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className='inputs'>
            {action==='Login'?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" name="" id="" placeholder='Name'/>
            </div>}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" name="" id="" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" name="" id="" placeholder='Password'/>
            </div>
        </div>
        {action==='Login'?<div className="forgot-password">Forgot password <span>Click here!!!</span></div>:<div></div>}
        <div className="submit-container">
            <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign-up')}}>Sign up</div>
            <div className={action==='Sign up'?'submit gray':'submit'}onClick={()=>{setAction('Login')}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup