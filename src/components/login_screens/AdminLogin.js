import React, { useContext, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Lock, AlternateEmail, Google } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import '../../styles/Login.css';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../Login';
import { UserContext } from '../../App'; // Import UserContext to update admin login state

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

const AdminLogin = () => {
  const { setUserData } = useContext(UserContext); // Access UserContext to set admin data
  const { setIsAdmin } = useContext(AdminContext); // Context to manage admin state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to verify admin credentials
  const verifyAdminAuth = async (event) => {
    event.preventDefault();

    try {
      // Fetch admin data from the server using email and password
      const response = await axios.get(`http://localhost:8080/adminauth/signin?emailId=${email}&password=${password}`);
      const admins = response.data;

      if (admins.length > 0) {
        // Admin found, set admin-specific state
        const admin = admins[0];

        setUserData({
          isLoggedIn: true,
          isAdmin: true, // Set isAdmin to true for admin users
          name: admin.name,
          email: admin.email,
          age: admin.age,
        });

        toast.success('Admin logged in successfully');
        navigate('/home'); // Redirect to admin dashboard or relevant page
      } else {
        // Admin not found
        toast.error('Invalid admin email or password');
      }
    } catch (error) {
      console.error('Error during admin authentication:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <form className="form" onSubmit={verifyAdminAuth}>
        <div className="flex-column">
          <label>Email (Admin)</label>
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
          <button className="btn apple" onClick={() => { setIsAdmin(false) }}>
            <PersonIcon fontSize="small" />
            User
          </button>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default AdminLogin;
