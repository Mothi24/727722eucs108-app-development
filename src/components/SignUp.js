import axios from 'axios';
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../styles/SignUp.css'

function SignUp() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/users', { name, email, password, age })
        .then(() => {
          toast.success('Registered Successfully')
          console.log(name);
          console.log(email);
          console.log(password);
          console.log(age);
        })
      navigate('/')
    }
    catch (e) {
      toast.error('An Error Occoured')
    }
  }


  return (
    <>
      <div className='whole_wrap'>
        <form className="form" onSubmit={handleSubmit}>
          <h1>REGISTER</h1>
          <div style={{ display: 'flex', gap: '10px' }}>


            <TextField
              id="name"
              label="NAME"
              variant="outlined"
              sx={{ width: '90%' }}
              value={name}
              onChange={(e) => setName(e.target.value)} required
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>


            <TextField
              id="email"
              label="EMAIL"
              variant="outlined"
              sx={{ width: '90%' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)} required
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>


            <TextField
              id="password"
              label="PASSWORD"
              variant="outlined"
              sx={{ width: '90%' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)} required
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>


            <TextField
              id="age"
              label="AGE"
              variant="outlined"
              sx={{ width: '90%' }}
              value={age}
              onChange={(e) => setAge(e.target.value)} required
            />
          </div>

          <button className="button-submit" type="submit">Register</button>


          <div className="flex-row">
            <button className="btn google">Google</button>
            <button className="btn apple">Apple</button>
          </div>

        </form>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>


    </>
  )
}

export default SignUp