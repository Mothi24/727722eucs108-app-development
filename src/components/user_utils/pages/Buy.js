import React, { useState, useRef, useContext } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Fab
} from '@mui/material';
import { styled } from '@mui/system';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddIcon from '@mui/icons-material/Add';
import '@fontsource/open-sans';
import { useNavigate } from 'react-router-dom';
import { BuyContext } from '../../contexts/ClothData';
import ShopItemCard from '../ShopItemCard';
import { UserContext } from '../../../App';

// Main container for the Buy page
const MainContainer = styled('div')({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#F7F7F7',
});

// Styled AppBar for the page header
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000',
  color: '#FFF',
  fontFamily: "'Open Sans', sans-serif",
});

// Container for the content on the page
const ContentContainer = styled(Box)({
  flexGrow: 1,
  padding: '20px',
  fontFamily: "'Open Sans', sans-serif",
});

// Drawer content
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

const DrawerContainer = styled(Drawer)({
  width: 250,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 250,
    boxSizing: 'border-box',
  },
});

// Floating Action Button Style
const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: 16,
  right: 16,
  backgroundColor: '#000',
  color: '#FFF',
  width: 56,
  height: 56,
  borderRadius: '50%',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#333',
  },
  padding: '35px',
  marginRight: '40px',
  marginBottom: '30px'
});

const Buy = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { userData } = useContext(UserContext)

  const shirtRef = useRef(null);
  const pantRef = useRef(null);
  const tshirtRef = useRef(null);
  const trousersRef = useRef(null);
  const suiteRef = useRef(null);

  const { buyData, setBuyData } = useContext(BuyContext)

  const handleButtonClick = (clothingType) => {
    let ref = null;
    switch (clothingType) {
      case 'Shirt':
        ref = shirtRef;
        break;
      case 'Pant':
        ref = pantRef;
        break;
      case 'T-Shirt':
        ref = tshirtRef;
        break;
      case 'Trousers':
        ref = trousersRef;
        break;
      case 'Suits':
        ref = suiteRef;
        break;
      default:
        break;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); // Close the drawer after selecting an item
  };

  const navigate = useNavigate();

  // Toggle the drawer's open/close state
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <MainContainer>
      <CssBaseline />
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuOutlinedIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: "'Open Sans', sans-serif", paddingLeft: '30px' }}>
            Buy
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <DrawerContainer
        variant="temporary"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
      >
        <DrawerContent>
          {/* List Items */}
          <List>
            <ListItem button>
              <ListItemText primary="Shirts" onClick={() => handleButtonClick('Shirt')} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pants" onClick={() => handleButtonClick('Pant')} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="T-Shirts" onClick={() => handleButtonClick('T-Shirt')} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trousers" onClick={() => handleButtonClick('Trousers')} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Suits" onClick={() => handleButtonClick('Suits')} />
            </ListItem>
          </List>

          {/* Divider */}
          <Divider variant="middle" />

          {/* Options Container */}
          <OptionsContainer>
            <List>
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

          <OptionsContainer>
            <List>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
          </OptionsContainer>

          {/* SignIn Button */}
          <SignInButton variant="contained" fullWidth onClick={() => navigate('/')}>
            Sign out
          </SignInButton>
        </DrawerContent>
      </DrawerContainer>
      <ContentContainer component="main">
        <Toolbar />
        <Box>
          {/* Render each category with headers and its respective ShopItemCard */}
          <div ref={shirtRef}>
            <Typography variant="h5" sx={{ marginTop: '30px', paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "50px" }}>
              Shirts
            </Typography>
            <ShopItemCard items={buyData.ShirtList} />
          </div>

          <div ref={pantRef}>
            <Typography variant="h5" sx={{ marginTop: '30px', paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "50px" }}>
              Pants
            </Typography>
            <ShopItemCard items={buyData.PantList} />
          </div>

          <div ref={tshirtRef}>
            <Typography variant="h5" sx={{ marginTop: '30px', paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "50px" }}>
              T-Shirts
            </Typography>
            <ShopItemCard items={buyData.TshirtList} />
          </div>

          <div ref={trousersRef}>
            <Typography variant="h5" sx={{ marginTop: '30px', paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "50px" }}>
              Trousers
            </Typography>
            <ShopItemCard items={buyData.TrousersList} />
          </div>

          <div ref={suiteRef}>
            <Typography variant="h5" sx={{ marginTop: '30px', paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "50px" }}>
              Suits
            </Typography>
            <ShopItemCard items={buyData.SuitList} />
          </div>
        </Box>
      </ContentContainer>
      {userData.isAdmin ? <StyledFab color="primary" aria-label="add">
        <AddIcon />
      </StyledFab> : <></>}
    </MainContainer>
  );
};

export default Buy;
