import React, { useContext, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Lock, AlternateEmail, Google } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import '../../styles/Login.css';
import { AdminContext } from '../Login';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

// Styled TextField to override focus styles
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

const UserLogin = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const { setIsAdmin } = useContext(AdminContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to verify user authentication
  const verifyAuth = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/userauth/signin?emailId=${email}&password=${password}`);
      const users = response.data;

      if (users.length > 0) {
        const user = users[0];
        console.log(user)

        setUserData({
          isLoggedIn: true,
          isAdmin: false,
          name: user.name,
          email: user.email,
          age: user.age
        });

        toast.success('Logged in successfully');
        navigate('/home');
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <form className="form" onSubmit={verifyAuth}>
        <div className="flex-column">
          <label>Email (User)</label>
        </div>
        <CustomTextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <div className="flex-column">
          <label>Password</label>
        </div>
        <CustomTextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit" type="submit">Sign In</button>

        <p className="p">
          Don't have an account? <span className="span" onClick={() => { navigate('/signup') }}>Sign Up</span>
        </p>
        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google">
            <Google fontSize="small" />
            Google
          </button>
          <button className="btn apple" onClick={() => { setIsAdmin(true) }}>
            <AdminPanelSettingsIcon fontSize="small" />
            Admin
          </button>
        </div>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
};

export default UserLogin;
