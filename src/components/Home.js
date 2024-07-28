import React, { useContext, useState } from 'react';
import '../styles/Home.css';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'; // Import the MenuOutlined icon
import { styled } from '@mui/system';
import '@fontsource/open-sans';
import homeTile from '../assets/home_tile.jpeg';
import buyImage from '../assets/rent.jpeg';   // Example images for the services
import rentImage from '../assets/swap.jpg';
import swapImage from '../assets/buy1.jpg';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import { UserContext } from '../App';


// Styles for Background Container
const BackgroundContainer = styled('div')({
  position: 'relative',
  width: '100%', // Full width
  height: '544px', // Image height
  minWidth: '1366px',
  backgroundImage: `url(${homeTile})`,
  backgroundSize: 'cover', // Cover the entire area
  backgroundPosition: 'center', // Center the image
  opacity: 0.5, // Image opacity
});

// Wrapper to properly position the AppBar
const AppBarWrapper = styled('div')({
  position: 'absolute',
  top: '50px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '70%',
  zIndex: 2, // Ensure AppBar is above the background image
});

// Styled AppBar with padding and other styles
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000', // Black background
  color: '#FFF', // White text
  padding: '0 30px', // Padding as per your requirement
  borderRadius: '50px', // Rounded corners as per your requirement
});

// Typography Styles
const StyledTypography = styled(Typography)({
  fontFamily: "'Open Sans', sans-serif", // Open Sans font
  color: '#FFF', // White text
  marginRight: '20px', // Spacing between options
  fontWeight: 400, // Regular font weight
  fontSize: '16px', // Font size for options
  textDecoration: 'none', // Remove underline
});

// Styles for sections
const Section = styled('section')({
  width: '100%', // Full width
  padding: '50px',
  fontFamily: "'Open Sans', sans-serif",
  backgroundColor: '#F7F7F7', // Light background for sections
  marginBottom: '20px',
  borderRadius: '8px',
  display: 'flex', // Flexbox for layout
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
});

// Drawer content styling
const DrawerContent = styled(Box)({
  width: 250,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

// Styles for the Profile and options section
const OptionsContainer = styled(Box)({
  marginTop: '20px',
  marginBottom: '20px',
});

// Style for SignIn button
const SignInButton = styled(Button)({
  marginTop: 'auto',
  backgroundColor: '#000',
  color: '#FFF',
  fontFamily: "'Open Sans', sans-serif",
  ':hover': {
    backgroundColor: '#333',
  },
});

// Styles for Service Cards
const ServiceCard = styled(Card)({
  maxWidth: 420, // Set card width to 420px
  margin: 'auto',
  textAlign: 'center',
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
});

const ServiceCardMedia = styled(CardMedia)({
  height: 315, // Set image height to 315px
  width: '100%', // Ensure image fills the width
});

// Smooth scroll behavior for anchor links
const scrollBehavior = {
  scrollBehavior: 'smooth',
};

const Home = () => {
  // State to control the drawer open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false)

  const { userData, setUserData } = useContext(UserContext)

  const navigate = useNavigate();

  // Function to toggle the drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleProfileClick = () => {
    setIsProfileCardOpen(true);
  };
  const handleProfileCardClose = () => {
    setIsProfileCardOpen(false);
  };

  const handleSignOut = () => {
    setUserData({
      isLoggedIn: false,
      isAdmin: false,
      name: '',
      email: '',
      age: ''
    })
    navigate('/')
  }

  return (
    <>
      {/* Apply scroll behavior globally */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Background Image Container */}
      <BackgroundContainer />

      {/* AppBar Wrapper for positioning */}
      <AppBarWrapper>
        <StyledAppBar position="static">
          <Toolbar>
            {/* Menu icon for the Drawer */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ marginRight: '20px' }}
            >
              <MenuOutlinedIcon /> {/* Use the MenuOutlined icon */}
            </IconButton>

            {/* Title with Open Sans font */}
            <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
              <Typography
                color="inherit"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 26,
                }}
              >
                FashionForward
              </Typography>
            </Box>

            {/* Navigation Options */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StyledTypography variant="h6" component="a" href="#services">
                Services
              </StyledTypography>
              <StyledTypography variant="h6" component="a" href="#about-us">
                About
              </StyledTypography>
              <StyledTypography variant="h6" component="a" href="#contact-us">
                Contact Us
              </StyledTypography>
            </Box>
          </Toolbar>
        </StyledAppBar>
      </AppBarWrapper>

      {/* Drawer for sidebar */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 3 }}
      >
        <DrawerContent>
          {/* Profile option */}
          <List>
            <ListItem button onClick={handleProfileClick}>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>

          {/* Divider */}
          <Divider variant="middle" />

          {/* Buy, Rent, Swap options */}
          <OptionsContainer>
            <List>
              <ListItem button>
                <ListItemText primary="Buy" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Rent" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Swap" />
              </ListItem>
            </List>
          </OptionsContainer>

          {/* Divider */}
          <Divider variant="middle" />

          {/* SignIn Button */}
          <SignInButton variant="contained" fullWidth onClick={handleSignOut}>
            Sign out
          </SignInButton>
        </DrawerContent>
      </Drawer>

      {/* Profile Card */}
      {isProfileCardOpen && (
        <ProfileCard userData={userData} onClose={handleProfileCardClose} />
      )}

      {/* Services Section */}
      <Section id="services">
        <Container maxWidth="xl"> {/* Use maxWidth to allow full width */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              mb: 4,
              textAlign: 'center',
            }}
          >
            Services
          </Typography>
          <Grid container spacing={3} justifyContent="center">  {/* Centering grid items */}
            {/* Buy Service */}
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard>
                <ServiceCardMedia
                  image={buyImage}
                  title="Buy"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    Buy
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: 14,
                      color: '#555',
                    }}
                  >
                    Discover the latest fashion trends and buy your favorite items with ease.
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>

            {/* Rent Service */}
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard>
                <ServiceCardMedia
                  image={rentImage}
                  title="Rent"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    Rent
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: 14,
                      color: '#555',
                    }}
                  >
                    Rent high-quality fashion pieces for any occasion at affordable prices.
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>

            {/* Swap Service */}
            <Grid item xs={12} sm={6} md={4}>
              <ServiceCard>
                <ServiceCardMedia
                  image={swapImage}
                  title="Swap"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    Swap
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: 14,
                      color: '#555',
                    }}
                  >
                    Exchange your fashion items with others to refresh your wardrobe sustainably.
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Divider to separate sections */}
      <Divider sx={{ margin: '0 0' }} />

      {/* About Us and Contact Us Sections */}
      <Section>
        <Container maxWidth="xl"> {/* Use maxWidth to allow full width */}
          <Grid container spacing={6} id="about-us">
            {/* About Us Section */}
            <Grid item xs={12} md={5}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  // width: '100%', // Set to full width
                }} // Smaller font size
              >
                FashionForward is a leading fashion rental service that provides
                a wide range of stylish clothing and accessories for every
                occasion. Our mission is to make high-quality fashion accessible
                to everyone, offering the latest trends and timeless classics at
                affordable prices. Whether you're preparing for a special event
                or simply looking to refresh your wardrobe, FashionForward has
                you covered.
              </Typography>
            </Grid>
            <div style={{ width: '120px' }}></div>
            {/* Divider between About Us and Contact Us */}
            <Divider orientation="vertical" flexItem variant="middle" />

            {/* Contact Us Section */}
            <Grid item xs={12} md={5} id="contact-us">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  // width: '100%', // Set to full width
                }} // Smaller font size
              >
                For any inquiries, please reach out to us at{' '}
                <a href="mailto:contact@fashionforward.com">
                  contact@fashionforward.com
                </a>
                . We would love to hear from you and assist you with any
                questions or concerns you may have.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Home;
