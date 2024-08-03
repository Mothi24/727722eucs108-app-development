import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { TextField, InputAdornment } from '@mui/material';
import { Lock, AlternateEmail, Google, Apple } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import '../styles/SignUp.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { UserContext } from '../App';


const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    border: '1.5px solid #ecedec',
    height: '50px',
    paddingLeft: '10px',
    transition: '0.2s ease-in-out',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    borderColor: 'transparent', // No border color change on focus
  },
  '& .MuiOutlinedInput-input': {
    padding: '0 14px', // Adjust padding to align with custom styles
  }
});


function SignUp() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const { userData, setUserData } = useContext(UserContext)

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/userauth/register",
        { name: name, emailId: email, password: password, age: age })
      if (response != null) {
        setUserData({ ...userData, name: name, email: email, age: age })
        toast.success('Registered Successfully')
        navigate('/home')
      }
      else {
        toast.error('User already exist');
      }
    }
    catch (e) {
      console.log(e)
      toast.error('An Error Occoured')
    }
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <CustomTextField
          onChange={(event) => { setName(event.target.value) }}
          variant="outlined"
          fullWidth
          placeholder="Enter your Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          className="inputForm"
        />

        <CustomTextField
          onChange={(event) => { setAge(event.target.value) }}
          variant="outlined"
          fullWidth
          placeholder="Enter your Age"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
          className="inputForm"
        />

        <CustomTextField
          onChange={(event) => { setEmail(event.target.value) }}
          variant="outlined"
          fullWidth
          placeholder="Enter your Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            ),
          }}
          className="inputForm"
        />

        <CustomTextField
          onChange={(event) => { setPassword(event.target.value) }}
          variant="outlined"
          type="password"
          fullWidth
          placeholder="Enter your Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
          className="inputForm"
        />

        <div className="flex-row">
          <div>
            <input type="checkbox" id="rememberMe" onClick={() => { setIsAdmin(!isAdmin) }} />
            <label htmlFor="rememberMe">Register  as Admin</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit" type='submit'>Sign Up</button>

        <p className="p">
          Already have an account? <span className="span">Sign In</span>
        </p>
        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google">
            <Google fontSize="small" />
            Google
          </button>
          <button className="btn apple" >
            <Apple fontSize="small" />
            Apple
          </button>
        </div>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

    </>
  )
}

export default SignUp