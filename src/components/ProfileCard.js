import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Avatar, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const ProfileCard = ({ userData, onClose }) => {
  const { isAdmin, name, email, age } = userData;

  return (
    <Card
      sx={{
        width: 400, // Fixed width
        height: 450, // Fixed height
        margin: '20px auto',
        textAlign: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#fff', // White background
        color: '#000', // Black text
        borderRadius: '16px', // Rounded edges
        padding: '20px', // Increased padding
        position: 'absolute',
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)',
        zIndex: 4, // Ensure it's on top of other components
        overflow: 'hidden', // Ensure content doesn't overflow
      }}
    >
      <CardContent>
        <Avatar
          sx={{
            margin: '0 auto 10px',
            backgroundColor: '#000', // Black background for avatar
            width: 80,
            height: 80,
          }}
        >
          <PersonIcon sx={{ fontSize: 50, color: '#fff' }} /> {/* White icon color */}
        </Avatar>
        <Typography variant="h6" sx={{ color: '#000', marginBottom: '16px' }}>
          {isAdmin ? 'Admin' : 'User'}
        </Typography>

        <Grid container spacing={1} sx={{ textAlign: 'left' }}>
          <Grid item xs={12}>
            <Typography variant="subtitle2" sx={{ color: '#000', fontWeight: 'bold' }}>
              Name:
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {name || 'No Name'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" sx={{ color: '#000', fontWeight: 'bold' }}>
              Email:
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {email || 'No Email'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" sx={{ color: '#000', fontWeight: 'bold' }}>
              Age:
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              {age || 'N/A'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            margin: '0 auto',
            backgroundColor: '#000', // Black button background
            color: '#fff', // White button text
            '&:hover': {
              backgroundColor: '#333', // Darker shade on hover
            },
          }}
          onClick={onClose}
        >
          Close
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
