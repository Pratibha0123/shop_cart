import React, { useState } from 'react';
import './CSS/loginsignup.css';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(true); 

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isSignUp ? 'Sign Up' : 'Log In'}</h1>
        <div className="loginsignup-fields">
          {isSignUp && (
            <input type="text" placeholder='Your Name' />
          )}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        {isSignUp && (
          <div className="loginsignup-agree">
            <input type="checkbox" id='agree' />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
        <p className='loginsignup-login'>
          {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}{' '}
          <span onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? 'Login here' : 'Sign Up here'}</span>
        </p>
        <button>{isSignUp ? 'Continue' : 'Log In'}</button>
        
      
      </div>
    </div>
  );
};

export default LoginSignup;
