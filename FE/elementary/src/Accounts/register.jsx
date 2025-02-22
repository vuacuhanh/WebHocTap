import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhoneSquare,FaFacebook } from "react-icons/fa";
import './acc.scss';
const Register = () => {
    return (
        <div className='register-form'>
            <div className='wrapper'>
                
                <form action="">
                    <h1>REGISTER</h1>
                    <div className='input-box'>
                    <input type='text' placeholder='UserName' required />
                    <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                    <input type='email' placeholder='Email' required />
                    <FaEnvelope className='icon' />
                    </div>
                    <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
                    </div>
                    <button type='submit'>Register</button>
                    <div className='diff-login'>
                    <ul>
                        <li><a href='#'><FaFacebook className='icon-fb icon-login' /></a></li>
                        <li><a href='#'><FaEnvelope className='icon-gmail icon-login' /></a></li>
                        <li><a href="#"><FaPhoneSquare className="icon-phone icon-login" /></a></li>
                    </ul>
                    </div>
                    <div className='register-link'>
                    <p>Already have an account? <a href='/dang-nhap'>Login</a></p>
                    </div>
                </form>
            </div>
    </div>  
    );
}

export default Register