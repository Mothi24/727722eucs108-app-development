import React, { createContext, useState } from 'react';

// Create contexts
export const CartBuyContext = createContext();
export const CartRentContext = createContext();
export const CartSwapContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({
    buyCart: {
      ShirtList: [
        {id: 1, imageUrl: 'img1.jpg', name: 'Classic White Shirt', description: 'A timeless white shirt perfect for any occasion.', price: '$29.99', quantity: 1 },
        {id: 2, imageUrl: 'img2.jpg', name: 'Blue Denim Shirt', description: 'Casual denim shirt for a laid-back look.', price: '$39.99', quantity: 1 },
        {id: 3, imageUrl: 'img3.jpg', name: 'Striped Casual Shirt', description: 'Comfortable striped shirt for everyday wear.', price: '$24.99', quantity: 1 },
      ],
      PantList: [],
      TshirtList: [],
      TrousersList: [],
      SuitList: [],
    },
    rentCart: {
      ShirtList: [
        {id: 1, imageUrl: 'img1.jpg', name: 'Classic White Shirt', description: 'A timeless white shirt perfect for any occasion.', price: '$29.99', quantity: 1 },
        {id: 2, imageUrl: 'img2.jpg', name: 'Blue Denim Shirt', description: 'Casual denim shirt for a laid-back look.', price: '$39.99', quantity: 1 },
        {id: 3, imageUrl: 'img3.jpg', name: 'Striped Casual Shirt', description: 'Comfortable striped shirt for everyday wear.', price: '$24.99', quantity: 1 },
      ],
      PantList: [],
      TshirtList: [],
      TrousersList: [],
      SuitList: [],
    },
    swapCart: {
      ShirtList: [],
      PantList: [],
      TshirtList: [],
      TrousersList: [],
      SuitList: [],
    },
  });

  const updateQuantity = (cartType, listType, itemName, quantityChange) => {
    setCartData((prevState) => {
      const updatedCart = { ...prevState };
      const itemList = updatedCart[cartType][listType];
      const itemIndex = itemList.findIndex((item) => item.name === itemName);

      if (itemIndex !== -1) {
        itemList[itemIndex].quantity += quantityChange;

        if (itemList[itemIndex].quantity < 1) {
          itemList[itemIndex].quantity = 1; // Ensure quantity doesn't go below 1
        }
      }

      return updatedCart;
    });
  };

  const handleIncrease = (cartType, listType, itemName) => {
    updateQuantity(cartType, listType, itemName, 1);
  };

  const handleDecrease = (cartType, listType, itemName) => {
    updateQuantity(cartType, listType, itemName, -1);
  };

  return (
    <CartBuyContext.Provider value={{ cartData, setCartData, handleIncrease, handleDecrease }}>
      <CartRentContext.Provider value={{ cartData, setCartData, handleIncrease, handleDecrease }}>
        <CartSwapContext.Provider value={{ cartData, setCartData, handleIncrease, handleDecrease }}>
          {children}
        </CartSwapContext.Provider>
      </CartRentContext.Provider>
    </CartBuyContext.Provider>
  );
};
