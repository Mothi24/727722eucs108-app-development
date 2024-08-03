// ClothContext.js

import React, { createContext, useState } from 'react';

// Create contexts
export const BuyContext = createContext();
export const RentContext = createContext();
export const SwapContext = createContext();

// Create a provider component
export const ClothProvider = ({ children }) => {
  const [buyData, setBuyData] = useState({
    ShirtList: [
      {id: 1, imageUrl: 'img1.jpg', name: 'Classic White Shirt', description: 'A timeless white shirt perfect for any occasion.', price: '$29.99' },
      {id: 2, imageUrl: 'img2.jpg', name: 'Blue Denim Shirt', description: 'Casual denim shirt for a laid-back look.', price: '$39.99' },
      {id: 3, imageUrl: 'img3.jpg', name: 'Striped Casual Shirt', description: 'Comfortable striped shirt for everyday wear.', price: '$24.99' },
      {id: 4, imageUrl: 'img4.jpg', name: 'Floral Print Shirt', description: 'Vibrant floral shirt to brighten up your wardrobe.', price: '$34.99' },
      {id: 5, imageUrl: 'img5.jpg', name: 'Plaid Shirt', description: 'Classic plaid shirt for a rustic look.', price: '$32.99' },
      {id: 6, imageUrl: 'img6.jpg', name: 'Linen Shirt', description: 'Lightweight linen shirt for summer days.', price: '$44.99' },
      {id: 7, imageUrl: 'img7.jpg', name: 'Black Formal Shirt', description: 'Elegant black shirt for formal occasions.', price: '$49.99' },
      {id: 8, imageUrl: 'img8.jpg', name: 'Graphic Tee', description: 'Stylish graphic tee for casual outings.', price: '$19.99' },
    ],
    PantList: [
      {id: 9, imageUrl: 'img9.jpg', name: 'Slim Fit Jeans', description: 'Modern slim fit jeans for everyday wear.', price: '$39.99' },
      {id: 10, imageUrl: 'img10.jpg', name: 'Chinos', description: 'Comfortable chinos for a smart-casual look.', price: '$29.99' },
    ],
    TshirtList: [
      {id: 11, imageUrl: 'img11.jpg', name: 'Graphic T-Shirt', description: 'Stylish graphic t-shirt for a casual look.', price: '$19.99' },
      {id: 12, imageUrl: 'img12.jpg', name: 'Plain T-Shirt', description: 'Simple plain t-shirt for everyday wear.', price: '$14.99' },
    ],
    TrousersList: [
      {id: 13, imageUrl: 'img13.jpg', name: 'Formal Trousers', description: 'Elegant formal trousers for office wear.', price: '$49.99' },
      {id: 14, imageUrl: 'img14.jpg', name: 'Casual Trousers', description: 'Comfortable casual trousers for everyday use.', price: '$34.99' },
    ],
    SuitList: [
      {id: 15, imageUrl: 'img15.jpg', name: 'Classic Black Suit', description: 'Elegant black suit for formal events.', price: '$199.99' },
      {id: 16, imageUrl: 'img16.jpg', name: 'Blue Business Suit', description: 'Professional blue suit for business meetings.', price: '$179.99' },
    ],
  });

  const [rentData, setRentData] = useState({
    ShirtList: [
      {id: 1, imageUrl: 'img1.jpg', name: 'Classic White Shirt', description: 'A timeless white shirt perfect for any occasion.', price: '$29.99' },
      {id: 2, imageUrl: 'img2.jpg', name: 'Blue Denim Shirt', description: 'Casual denim shirt for a laid-back look.', price: '$39.99' },
      {id: 3, imageUrl: 'img3.jpg', name: 'Striped Casual Shirt', description: 'Comfortable striped shirt for everyday wear.', price: '$24.99' },
      {id: 4, imageUrl: 'img4.jpg', name: 'Floral Print Shirt', description: 'Vibrant floral shirt to brighten up your wardrobe.', price: '$34.99' },
      {id: 5, imageUrl: 'img5.jpg', name: 'Plaid Shirt', description: 'Classic plaid shirt for a rustic look.', price: '$32.99' },
      {id: 6, imageUrl: 'img6.jpg', name: 'Linen Shirt', description: 'Lightweight linen shirt for summer days.', price: '$44.99' },
      {id: 7, imageUrl: 'img7.jpg', name: 'Black Formal Shirt', description: 'Elegant black shirt for formal occasions.', price: '$49.99' },
      {id: 8, imageUrl: 'img8.jpg', name: 'Graphic Tee', description: 'Stylish graphic tee for casual outings.', price: '$19.99' },
    ],
    PantList: [
      {id: 9, imageUrl: 'img9.jpg', name: 'Slim Fit Jeans', description: 'Modern slim fit jeans for everyday wear.', price: '$39.99' },
      {id: 10, imageUrl: 'img10.jpg', name: 'Chinos', description: 'Comfortable chinos for a smart-casual look.', price: '$29.99' },
    ],
    TshirtList: [
      {id: 11, imageUrl: 'img11.jpg', name: 'Graphic T-Shirt', description: 'Stylish graphic t-shirt for a casual look.', price: '$19.99' },
      {id: 12, imageUrl: 'img12.jpg', name: 'Plain T-Shirt', description: 'Simple plain t-shirt for everyday wear.', price: '$14.99' },
    ],
    TrousersList: [
      {id: 13, imageUrl: 'img13.jpg', name: 'Formal Trousers', description: 'Elegant formal trousers for office wear.', price: '$49.99' },
      {id: 14, imageUrl: 'img14.jpg', name: 'Casual Trousers', description: 'Comfortable casual trousers for everyday use.', price: '$34.99' },
    ],
    SuitList: [
      {id: 15, imageUrl: 'img15.jpg', name: 'Classic Black Suit', description: 'Elegant black suit for formal events.', price: '$199.99' },
      {id: 16, imageUrl: 'img16.jpg', name: 'Blue Business Suit', description: 'Professional blue suit for business meetings.', price: '$179.99' },
    ],
  });

  const [swapData, setSwapData] = useState({
    ShirtList: [
      {id: 1, imageUrl: 'img1.jpg', name: 'Classic White Shirt', description: 'A timeless white shirt perfect for any occasion.', price: '$29.99' },
      {id: 2, imageUrl: 'img2.jpg', name: 'Blue Denim Shirt', description: 'Casual denim shirt for a laid-back look.', price: '$39.99' },
      {id: 3, imageUrl: 'img3.jpg', name: 'Striped Casual Shirt', description: 'Comfortable striped shirt for everyday wear.', price: '$24.99' },
      {id: 4, imageUrl: 'img4.jpg', name: 'Floral Print Shirt', description: 'Vibrant floral shirt to brighten up your wardrobe.', price: '$34.99' },
      {id: 5, imageUrl: 'img5.jpg', name: 'Plaid Shirt', description: 'Classic plaid shirt for a rustic look.', price: '$32.99' },
      {id: 6, imageUrl: 'img6.jpg', name: 'Linen Shirt', description: 'Lightweight linen shirt for summer days.', price: '$44.99' },
      {id: 7, imageUrl: 'img7.jpg', name: 'Black Formal Shirt', description: 'Elegant black shirt for formal occasions.', price: '$49.99' },
      {id: 8, imageUrl: 'img8.jpg', name: 'Graphic Tee', description: 'Stylish graphic tee for casual outings.', price: '$19.99' },
    ],
    PantList: [
      {id: 9, imageUrl: 'img9.jpg', name: 'Slim Fit Jeans', description: 'Modern slim fit jeans for everyday wear.', price: '$39.99' },
      {id: 10, imageUrl: 'img10.jpg', name: 'Chinos', description: 'Comfortable chinos for a smart-casual look.', price: '$29.99' },
    ],
    TshirtList: [
      {id: 11, imageUrl: 'img11.jpg', name: 'Graphic T-Shirt', description: 'Stylish graphic t-shirt for a casual look.', price: '$19.99' },
      {id: 12, imageUrl: 'img12.jpg', name: 'Plain T-Shirt', description: 'Simple plain t-shirt for everyday wear.', price: '$14.99' },
    ],
    TrousersList: [
      {id: 13, imageUrl: 'img13.jpg', name: 'Formal Trousers', description: 'Elegant formal trousers for office wear.', price: '$49.99' },
      {id: 14, imageUrl: 'img14.jpg', name: 'Casual Trousers', description: 'Comfortable casual trousers for everyday use.', price: '$34.99' },
    ],
    SuitList: [
      {id: 15, imageUrl: 'img15.jpg', name: 'Classic Black Suit', description: 'Elegant black suit for formal events.', price: '$199.99' },
      {id: 16, imageUrl: 'img16.jpg', name: 'Blue Business Suit', description: 'Professional blue suit for business meetings.', price: '$179.99' },
    ],
  });

  return (
    <BuyContext.Provider value={{ buyData, setBuyData }}>
      <RentContext.Provider value={{ rentData, setRentData }}>
        <SwapContext.Provider value={{ swapData, setSwapData }}>
          {children}
        </SwapContext.Provider>
      </RentContext.Provider>
    </BuyContext.Provider>
  );
};
