// ClothContext.js

import React, { createContext, useState } from 'react';

// Create a context
export const ClothContext = createContext();

// Create a provider component
export const ClothProvider = ({ children }) => {
  const [clothData, setClothData] = useState({
    ShirtList: [
      {
        imageUrl: 'https://example.com/shirt1.jpg',
        name: 'Classic White Shirt',
        description: 'A timeless white shirt perfect for any occasion.',
        price: '$29.99',
      },
      {
        imageUrl: 'https://example.com/shirt2.jpg',
        name: 'Blue Denim Shirt',
        description: 'Casual denim shirt for a laid-back look.',
        price: '$39.99',
      },
      {
        imageUrl: 'https://example.com/shirt3.jpg',
        name: 'Striped Casual Shirt',
        description: 'Comfortable striped shirt for everyday wear.',
        price: '$24.99',
      },
      {
        imageUrl: 'https://example.com/shirt4.jpg',
        name: 'Floral Print Shirt',
        description: 'Vibrant floral shirt to brighten up your wardrobe.',
        price: '$34.99',
      },
      {
        imageUrl: 'https://example.com/shirt5.jpg',
        name: 'Plaid Shirt',
        description: 'Classic plaid shirt for a rustic look.',
        price: '$32.99',
      },
      {
        imageUrl: 'https://example.com/shirt6.jpg',
        name: 'Linen Shirt',
        description: 'Lightweight linen shirt for summer days.',
        price: '$44.99',
      },
      {
        imageUrl: 'https://example.com/shirt7.jpg',
        name: 'Black Formal Shirt',
        description: 'Elegant black shirt for formal occasions.',
        price: '$49.99',
      },
      {
        imageUrl: 'https://example.com/shirt8.jpg',
        name: 'Graphic Tee',
        description: 'Stylish graphic tee for casual outings.',
        price: '$19.99',
      },
    ],
    PantList: [
      {
        imageUrl: 'https://example.com/pant1.jpg',
        name: 'Slim Fit Jeans',
        description: 'Modern slim fit jeans for everyday wear.',
        price: '$39.99',
      },
      {
        imageUrl: 'https://example.com/pant2.jpg',
        name: 'Chinos',
        description: 'Comfortable chinos for a smart-casual look.',
        price: '$29.99',
      },
    ],
    TshirtList: [
      {
        imageUrl: 'https://example.com/tshirt1.jpg',
        name: 'Graphic T-Shirt',
        description: 'Stylish graphic t-shirt for a casual look.',
        price: '$19.99',
      },
      {
        imageUrl: 'https://example.com/tshirt2.jpg',
        name: 'Plain T-Shirt',
        description: 'Simple plain t-shirt for everyday wear.',
        price: '$14.99',
      },
    ],
    TrousersList: [
      {
        imageUrl: 'https://example.com/trouser1.jpg',
        name: 'Formal Trousers',
        description: 'Elegant formal trousers for office wear.',
        price: '$49.99',
      },
      {
        imageUrl: 'https://example.com/trouser2.jpg',
        name: 'Casual Trousers',
        description: 'Comfortable casual trousers for everyday use.',
        price: '$34.99',
      },
    ],
    SuitList: [
      {
        imageUrl: 'https://example.com/suite1.jpg',
        name: 'Classic Black Suit',
        description: 'Elegant black suit for formal events.',
        price: '$199.99',
      },
      {
        imageUrl: 'https://example.com/suite2.jpg',
        name: 'Blue Business Suit',
        description: 'Professional blue suit for business meetings.',
        price: '$179.99',
      },
    ],
  });

  return (
    <ClothContext.Provider value={{ clothData, setClothData }}>
      {children}
    </ClothContext.Provider>
  );
};
