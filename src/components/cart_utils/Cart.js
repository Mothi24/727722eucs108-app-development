import React, { useContext } from 'react';
import { Container, Typography, Card, CardContent, Button, Box, Divider } from '@mui/material';
import { CartBuyContext, CartRentContext, CartSwapContext } from '../contexts/CartContext';
import CartItemCard from './CartItemCard';

const Cart = () => {
  const { cartData: buyCart, handleIncrease: handleIncreaseBuy, handleDecrease: handleDecreaseBuy } = useContext(CartBuyContext);
  const { cartData: rentCart, handleIncrease: handleIncreaseRent, handleDecrease: handleDecreaseRent } = useContext(CartRentContext);
  const { cartData: swapCart, handleIncrease: handleIncreaseSwap, handleDecrease: handleDecreaseSwap } = useContext(CartSwapContext);

  const getItemsByCategory = (category) => {
    return [
      ...category.ShirtList,
      ...category.PantList,
      ...category.TshirtList,
      ...category.TrousersList,
      ...category.SuitList,
    ];
  };

  const parsePrice = (price) => {
    const parsedPrice = parseFloat(price.replace('$', ''));
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  const calculateTotalPrice = (items) => {
    return items
      .reduce((total, item) => {
        const price = parsePrice(item.price);
        return total + price * (item.quantity || 1);  // Ensure quantity defaults to 1 if not provided
      }, 0)
      .toFixed(2);
  };

  const buyItems = getItemsByCategory(buyCart.buyCart);
  const rentItems = getItemsByCategory(rentCart.rentCart);
  const swapItems = getItemsByCategory(swapCart.swapCart);

  const totalPrice = (
    parseFloat(calculateTotalPrice(buyItems)) +
    parseFloat(calculateTotalPrice(rentItems)) +
    parseFloat(calculateTotalPrice(swapItems))
  ).toFixed(2);
  const totalItems = buyItems.length + rentItems.length + swapItems.length;

  const handleRemove = (id) => {
    // Implement the logic to remove item by id
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mt={4} width='1200px'>
          {/* Cart Items Section (Left) */}
          <Box flex={1} pr={2}>
            <Typography variant="h3" gutterBottom style={{ fontFamily: 'Open Sans', marginBottom: '24px' }}>
              Cart
            </Typography>

            <Box>
              <Typography variant="h4" gutterBottom>
                Buy
              </Typography>
              <CartItemCard
                items={buyItems}
                onRemove={handleRemove}
                onIncrease={handleIncreaseBuy}
                onDecrease={handleDecreaseBuy}
                cartType="buyCart"
                listType="ShirtList"
              />

              <Typography variant="h4" gutterBottom>
                Rent
              </Typography>
              <CartItemCard
                items={rentItems}
                onRemove={handleRemove}
                onIncrease={handleIncreaseRent}
                onDecrease={handleDecreaseRent}
                cartType="rentCart"
                listType="ShirtList"
              />

              <Typography variant="h4" gutterBottom>
                Swap
              </Typography>
              <CartItemCard
                items={swapItems}
                onRemove={handleRemove}
                onIncrease={handleIncreaseSwap}
                onDecrease={handleDecreaseSwap}
                cartType="swapCart"
                listType="ShirtList"
              />
            </Box>
          </Box>

          {/* Order Summary Section (Right) */}
          <Box width="420px" pl={2} ml="auto" display="flex" justifyContent="center" paddingTop='100px'>
            <Card style={{ padding: '16px', width: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom style={{ fontFamily: 'Open Sans' }}>
                  Order Summary
                </Typography>

                <Box display="flex" justifyContent="space-between" mb={1} p={1}>
                  <Typography variant="body1">Bag Total ({totalItems})</Typography>
                  <Typography variant="body1">${totalPrice}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between" mb={1} p={1}>
                  <Typography variant="body1">Shipping</Typography>
                  <Typography variant="body1">Free</Typography>
                </Box>

                <Divider style={{ marginBottom: '16px' }} />

                <Box display="flex" justifyContent="space-between" mb={2} p={1}>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Payable Amount
                  </Typography>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    ${totalPrice}
                  </Typography>
                </Box>

                <Button variant="contained" color="primary" fullWidth style={{ backgroundColor: 'black' }}>
                  Check Out ({totalItems})
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      <div style={{ height: '120px' }}></div>
    </>
  );
};

export default Cart;
