import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function ShopItemCard({ items }) {
  return (
    <Grid container spacing={2} sx={{ padding: '20px' }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={require(`../../assets/cart_assets/${item.imageUrl}`)}
              alt={item.name}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Typography variant="h6" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {item.price}
                </Typography>
              </div>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShopItemCard;
