// ClothContext.js

import React, { createContext, useEffect, useState } from 'react';

// Create contexts
export const BuyContext = createContext();
export const RentContext = createContext();
export const SwapContext = createContext();

// Create a provider component
export const ClothProvider = ({ children }) => {

  const [buyData, setBuyData] = useState({
    ShirtList: [
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg1.jpg?alt=media&token=3ab92cbd-567c-4016-8903-cbf9b097a595', name: 'Classic White Shirt', description: 'A timeless white shirt perfect for any occasion.', price: '29.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg2.jpg?alt=media&token=90ba86ee-1731-449f-a9d5-558e4a056c93', name: 'Blue Denim Shirt', description: 'Casual denim shirt for a laid-back look.', price: '39.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg3.jpg?alt=media&token=81849aa5-72fa-4329-ae8b-b338f3987a69', name: 'Striped Casual Shirt', description: 'Comfortable striped shirt for everyday wear.', price: '24.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg4.jpg?alt=media&token=81f4bbc5-3918-4ab7-94b2-4b407569604a', name: 'Floral Print Shirt', description: 'Vibrant floral shirt to brighten up your wardrobe.', price: '34.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg5.jpg?alt=media&token=39cd1b7c-3fcf-4e11-aeec-d9fe86e5b327', name: 'Plaid Shirt', description: 'Classic plaid shirt for a rustic look.', price: '32.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg6.jpg?alt=media&token=6cbe1495-b035-42e2-b28d-90ae30627af9', name: 'Linen Shirt', description: 'Lightweight linen shirt for summer days.', price: '44.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg7.jpg?alt=media&token=d24bf48d-5395-4e44-8621-1f1c5be92e31', name: 'Black Formal Shirt', description: 'Elegant black shirt for formal occasions.', price: '49.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg8.jpg?alt=media&token=3766cfa4-d45b-4942-ac83-1417b10e46a8', name: 'Graphic Tee', description: 'Stylish graphic tee for casual outings.', price: '19.99' },
    ],
    PantList: [
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg9.jpg?alt=media&token=7eba2617-ae75-4c0d-9892-f666d027eb26', name: 'Slim Fit Jeans', description: 'Modern slim fit jeans for everyday wear.', price: '39.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg10.jpg?alt=media&token=42799ee3-8d8b-4f75-8ae5-07bd1a9f4219', name: 'Chinos', description: 'Comfortable chinos for a smart-casual look.', price: '29.99' },
    ],
    TshirtList: [
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg11.jpg?alt=media&token=fc239bb9-e4e4-4434-aca9-85e9b71c299c', name: 'Graphic T-Shirt', description: 'Stylish graphic t-shirt for a casual look.', price: '19.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg12.jpg?alt=media&token=29809e13-4366-443b-9eac-fd4e6c8cc848', name: 'Plain T-Shirt', description: 'Simple plain t-shirt for everyday wear.', price: '14.99' },
    ],
    TrousersList: [
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg13.jpg?alt=media&token=7dc84c4e-c74b-4277-93ac-e325e94b7f18', name: 'Formal Trousers', description: 'Elegant formal trousers for office wear.', price: '49.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg14.jpg?alt=media&token=03529a63-0ae7-4511-8b9e-43196a77802f', name: 'Casual Trousers', description: 'Comfortable casual trousers for everyday use.', price: '$34.99' },
    ],
    SuitList: [
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg15.jpg?alt=media&token=093b0f9a-f657-49ba-9630-a91848ada219', name: 'Classic Black Suit', description: 'Elegant black suit for formal events.', price: '199.99' },
      { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg16.jpg?alt=media&token=e202f626-aee1-4153-8b33-12a1eed1c9b9', name: 'Blue Business Suit', description: 'Professional blue suit for business meetings.', price: '179.99' },
    ],
  });

  const [rentData, setRentData] = useState({
    ShirtList: [
      { id: 1, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg1.jpg?alt=media&token=3ab92cbd-567c-4016-8903-cbf9b097a595', name: 'Classic White Shirt', description: 'A timeless white shirt perfect for any occasion.', price: '29.99' },
      { id: 2, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg2.jpg?alt=media&token=90ba86ee-1731-449f-a9d5-558e4a056c93', name: 'Blue Denim Shirt', description: 'Casual denim shirt for a laid-back look.', price: '39.99' },
      { id: 3, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg3.jpg?alt=media&token=81849aa5-72fa-4329-ae8b-b338f3987a69', name: 'Striped Casual Shirt', description: 'Comfortable striped shirt for everyday wear.', price: '24.99' },
      { id: 4, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg4.jpg?alt=media&token=81f4bbc5-3918-4ab7-94b2-4b407569604a', name: 'Floral Print Shirt', description: 'Vibrant floral shirt to brighten up your wardrobe.', price: '34.99' },
      { id: 5, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg5.jpg?alt=media&token=39cd1b7c-3fcf-4e11-aeec-d9fe86e5b327', name: 'Plaid Shirt', description: 'Classic plaid shirt for a rustic look.', price: '32.99' },
      { id: 6, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg6.jpg?alt=media&token=6cbe1495-b035-42e2-b28d-90ae30627af9', name: 'Linen Shirt', description: 'Lightweight linen shirt for summer days.', price: '44.99' },
      { id: 7, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg7.jpg?alt=media&token=d24bf48d-5395-4e44-8621-1f1c5be92e31', name: 'Black Formal Shirt', description: 'Elegant black shirt for formal occasions.', price: '49.99' },
      { id: 8, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg8.jpg?alt=media&token=3766cfa4-d45b-4942-ac83-1417b10e46a8', name: 'Graphic Tee', description: 'Stylish graphic tee for casual outings.', price: '19.99' },
    ],
    PantList: [
      { id: 9, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg9.jpg?alt=media&token=7eba2617-ae75-4c0d-9892-f666d027eb26', name: 'Slim Fit Jeans', description: 'Modern slim fit jeans for everyday wear.', price: '39.99' },
      { id: 10, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg10.jpg?alt=media&token=42799ee3-8d8b-4f75-8ae5-07bd1a9f4219', name: 'Chinos', description: 'Comfortable chinos for a smart-casual look.', price: '29.99' },
    ],
    TshirtList: [
      { id: 11, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg11.jpg?alt=media&token=fc239bb9-e4e4-4434-aca9-85e9b71c299c', name: 'Graphic T-Shirt', description: 'Stylish graphic t-shirt for a casual look.', price: '19.99' },
      { id: 12, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg12.jpg?alt=media&token=29809e13-4366-443b-9eac-fd4e6c8cc848', name: 'Plain T-Shirt', description: 'Simple plain t-shirt for everyday wear.', price: '14.99' },
    ],
    TrousersList: [
      { id: 13, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg13.jpg?alt=media&token=7dc84c4e-c74b-4277-93ac-e325e94b7f18', name: 'Formal Trousers', description: 'Elegant formal trousers for office wear.', price: '49.99' },
      { id: 14, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg14.jpg?alt=media&token=03529a63-0ae7-4511-8b9e-43196a77802f', name: 'Casual Trousers', description: 'Comfortable casual trousers for everyday use.', price: '34.99' },
    ],
    SuitList: [
      { id: 15, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg15.jpg?alt=media&token=093b0f9a-f657-49ba-9630-a91848ada219', name: 'Classic Black Suit', description: 'Elegant black suit for formal events.', price: '199.99' },
      { id: 16, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg16.jpg?alt=media&token=e202f626-aee1-4153-8b33-12a1eed1c9b9', name: 'Blue Business Suit', description: 'Professional blue suit for business meetings.', price: '179.99' },
    ],
  });

  const [swapData, setSwapData] = useState({
    ShirtList: [
      { id: 1, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg1.jpg?alt=media&token=3ab92cbd-567c-4016-8903-cbf9b097a595', name: 'Classic White Shirt', description: 'A timeless white shirt perfect for any occasion.', price: '$29.99' },
      { id: 2, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg2.jpg?alt=media&token=90ba86ee-1731-449f-a9d5-558e4a056c93', name: 'Blue Denim Shirt', description: 'Casual denim shirt for a laid-back look.', price: '$39.99' },
      { id: 3, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg3.jpg?alt=media&token=81849aa5-72fa-4329-ae8b-b338f3987a69', name: 'Striped Casual Shirt', description: 'Comfortable striped shirt for everyday wear.', price: '$24.99' },
      { id: 4, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg4.jpg?alt=media&token=81f4bbc5-3918-4ab7-94b2-4b407569604a', name: 'Floral Print Shirt', description: 'Vibrant floral shirt to brighten up your wardrobe.', price: '$34.99' },
      { id: 5, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg5.jpg?alt=media&token=39cd1b7c-3fcf-4e11-aeec-d9fe86e5b327', name: 'Plaid Shirt', description: 'Classic plaid shirt for a rustic look.', price: '$32.99' },
      { id: 6, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg6.jpg?alt=media&token=6cbe1495-b035-42e2-b28d-90ae30627af9', name: 'Linen Shirt', description: 'Lightweight linen shirt for summer days.', price: '$44.99' },
      { id: 7, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg7.jpg?alt=media&token=d24bf48d-5395-4e44-8621-1f1c5be92e31', name: 'Black Formal Shirt', description: 'Elegant black shirt for formal occasions.', price: '$49.99' },
      { id: 8, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg8.jpg?alt=media&token=3766cfa4-d45b-4942-ac83-1417b10e46a8', name: 'Graphic Tee', description: 'Stylish graphic tee for casual outings.', price: '$19.99' },
    ],
    PantList: [
      { id: 9, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg9.jpg?alt=media&token=7eba2617-ae75-4c0d-9892-f666d027eb26', name: 'Slim Fit Jeans', description: 'Modern slim fit jeans for everyday wear.', price: '$39.99' },
      { id: 10, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg10.jpg?alt=media&token=42799ee3-8d8b-4f75-8ae5-07bd1a9f4219', name: 'Chinos', description: 'Comfortable chinos for a smart-casual look.', price: '$29.99' },
    ],
    TshirtList: [
      { id: 11, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg11.jpg?alt=media&token=fc239bb9-e4e4-4434-aca9-85e9b71c299c', name: 'Graphic T-Shirt', description: 'Stylish graphic t-shirt for a casual look.', price: '$19.99' },
      { id: 12, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg12.jpg?alt=media&token=29809e13-4366-443b-9eac-fd4e6c8cc848', name: 'Plain T-Shirt', description: 'Simple plain t-shirt for everyday wear.', price: '$14.99' },
    ],
    TrousersList: [
      { id: 13, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg13.jpg?alt=media&token=7dc84c4e-c74b-4277-93ac-e325e94b7f18', name: 'Formal Trousers', description: 'Elegant formal trousers for office wear.', price: '$49.99' },
      { id: 14, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg14.jpg?alt=media&token=03529a63-0ae7-4511-8b9e-43196a77802f', name: 'Casual Trousers', description: 'Comfortable casual trousers for everyday use.', price: '$34.99' },
    ],
    SuitList: [
      { id: 15, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg15.jpg?alt=media&token=093b0f9a-f657-49ba-9630-a91848ada219', name: 'Classic Black Suit', description: 'Elegant black suit for formal events.', price: '$199.99' },
      { id: 16, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fashion-forward-e289e.appspot.com/o/image-assets%2Fimg16.jpg?alt=media&token=e202f626-aee1-4153-8b33-12a1eed1c9b9', name: 'Blue Business Suit', description: 'Professional blue suit for business meetings.', price: '$179.99' },
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
