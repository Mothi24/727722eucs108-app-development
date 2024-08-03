import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Grid, Avatar, Button, Box, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const CartItemCard = ({ items, onRemove, onIncrease, onDecrease, cartType, listType }) => {
  if (items.length === 0) {
    return (
      <Card sx={{ width: '100%', maxWidth: '1900px' }}>
        <CardContent>
          <Typography variant="h6" align="center">
            Nothing added yet!
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ width: '100%', maxWidth: '1900px' }}>
      <CardContent>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} alignItems="flex-start">
              <Grid container spacing={2} alignItems="center">
                {/* Image Grid */}
                <Grid item xs={2}>
                  <Avatar
                    variant="square"
                    src={require(`../../assets/cart_assets/${item.imageUrl}`)}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: 80,
                      maxHeight: 80,
                      borderRadius: '10px',
                    }}
                  />
                </Grid>

                {/* Text Grid */}
                <Grid item xs={3}>
                  <ListItemText primary={item.name} secondary={item.description} />
                </Grid>

                {/* Quantity Grid */}
                <Grid item xs={3}>
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={() => onDecrease(cartType, listType, item.name)}>
                      <Remove />
                    </IconButton>
                    <Typography>{item.quantity}</Typography>
                    <IconButton onClick={() => onIncrease(cartType, listType, item.name)}>
                      <Add />
                    </IconButton>
                  </Box>
                </Grid>

                {/* Price Grid */}
                <Grid item xs={2}>
                  <Typography variant="body2" color="textSecondary" align="right">
                    {item.price}
                  </Typography>
                </Grid>

                {/* Remove Button Grid */}
                <Grid item xs={2}>
                  <Button variant="contained" color="primary" onClick={() => onRemove(item.id)}>
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
