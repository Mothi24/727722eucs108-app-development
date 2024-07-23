import React, { useState } from 'react'
import Home from './Home'
import './Authenticate.css';

function Authenticate() {

  const [isRegister, setIsRegister] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState('Jonathan Joestar')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Login = () => {
    return (
      <div className='main'>
        <h3>Log in</h3>
        <div className='form_div'>
          <form>
            <table>
              <tr>
                <input name='email' type='email' placeholder='Enter your Email' onChange={(val) => { setEmail(val) }} /></tr>
              <tr>
                <input name='password' type='password' placeholder='Enter Your Password' onChange={(val) => { setPassword(val) }} /></tr>
              <button onClick={() => { setLoggedIn(!isLoggedIn) }}>Log In</button>
              <tr><button onClick={() => { setIsRegister(!isRegister) }}>Sign Up instead</button></tr>
            </table>
          </form>
          <br />
        </div>
      </div>
    );
  };
  const Signup = () => {
    return (
      <div className='main'>
        <h3>Sign Up</h3>
        <div className='form_div'>
          <form>
            <table>
              <tr>
                <input name='name' type='text' placeholder='Enter your Name' onChange={(val) => { setName(val) }} />
              </tr>
              <tr>
                <input name='email' type='email' placeholder='Enter your Email' onChange={(val) => { setEmail(val) }} />
              </tr>
              <tr>
                <input name='password' type='password' placeholder='Enter Your Password' onChange={(val) => { setPassword(val) }} />
              </tr>
              <tr>
                <button onClick={() => { setLoggedIn(!isLoggedIn) }}>Sign Up</button>
              </tr>
              <tr>
                <button onClick={() => { setIsRegister(!isRegister) }}>Sign In instead</button>
              </tr>
            </table>
          </form>
        </div>
      </div>
    )
  };

  const AuthenticateViewer = () => {
    return (isRegister) ? <Signup /> : <Login />
  }

  if (isLoggedIn === false) {
    return (
      <div><AuthenticateViewer /></div>

    );
  }
  else {
    return (
      <div><Home name={name} /></div>
    );
  }
}

export default Authenticate