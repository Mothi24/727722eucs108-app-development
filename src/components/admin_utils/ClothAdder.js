import React, { useContext, useState, useRef } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { BuyContext, RentContext, SwapContext } from '../contexts/ClothData';
import '../../styles/ClothAdder.css';
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import '@fontsource/open-sans';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { fbApp } from '../../App';

function ClothAdder() {
  const { buyData, setBuyData } = useContext(BuyContext);
  const { rentData, setRentData } = useContext(RentContext);
  const { swapData, setSwapData } = useContext(SwapContext);

  const storage = getStorage(fbApp)

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    transactionType: '',
    clothType: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const uploadImage = async (image) => {
    try {

      const storageRef = ref(storage, `image-assets/${image.name}`)
      await uploadBytes(storageRef, image)

      const url = await getDownloadURL(storageRef);
      return url;

    }
    catch (e) {
      console.log('Error uploading image')
      console.log(e)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(selectedImage);

    let imageUrl = ''
    if (selectedImage) {
      imageUrl = await uploadImage(selectedImage);
      console.log(imageUrl)
    }
    else {
      console.log('Image not selected, but anyways')
    }

    const newProduct = {
      imageUrl,
      name: formData.name,
      description: formData.description,
      price: formData.price
    }

    if (formData.transactionType === 'buy') {
      if (formData.clothType === 'Shirt') {
        setBuyData(prevState => ({
          ...prevState,
          ShirtList: [...prevState.ShirtList, newProduct]
        }));
      }
      if (formData.clothType === 'Pant') {
        setBuyData(prevState => ({
          ...prevState,
          PantList: [...prevState.PantList, newProduct]
        }))

      }
      if (formData.clothType === 'Tshirt') {
        setBuyData(prevState => ({
          ...prevState,
          TshirtList: [...prevState.TshirtList, newProduct]
        }))
      }
      if (formData.clothType === 'Trousers') {
        setBuyData(prevState => ({
          ...prevState,
          TshirtList: [...prevState.TrousersList, newProduct]
        }))

      }
      if (formData.clothType === 'Suit') {
        setBuyData(prevState => ({
          ...prevState,
          SuitList: [...prevState.SuitList, newProduct]
        }))
      }
      console.log(buyData.ShirtList)
      console.log(buyData.PantList)
      console.log(buyData.TshirtList)
      console.log(buyData.TrousersList)
      console.log(buyData.SuitList)


    }

    if (formData.transactionType === 'rent') {
      if (formData.clothType === 'Shirt') {
        setRentData(prevState => ({
          ...prevState,
          ShirtList: [...prevState.ShirtList, newProduct]
        }));
      }
      if (formData.clothType === 'Pant') {
        setRentData(prevState => ({
          ...prevState,
          PantList: [...prevState.PantList, newProduct]
        }))

      }
      if (formData.clothType === 'Tshirt') {
        setRentData(prevState => ({
          ...prevState,
          TshirtList: [...prevState.TshirtList, newProduct]
        }))
      }
      if (formData.clothType === 'Trousers') {
        setRentData(prevState => ({
          ...prevState,
          TshirtList: [...prevState.TrousersList, newProduct]
        }))

      }
      if (formData.clothType === 'Suit') {
        setRentData(prevState => ({
          ...prevState,
          SuitList: [...prevState.SuitList, newProduct]
        }))
      }
      console.log(rentData.ShirtList)
      console.log(rentData.PantList)
      console.log(rentData.TshirtList)
      console.log(rentData.TrousersList)
      console.log(rentData.SuitList)
    }

    if (formData.transactionType === 'swap') {
      if (formData.clothType === 'Shirt') {
        setSwapData(prevState => ({
          ...prevState,
          ShirtList: [...prevState.ShirtList, newProduct]
        }));
      }
      if (formData.clothType === 'Pant') {
        setSwapData(prevState => ({
          ...prevState,
          PantList: [...prevState.PantList, newProduct]
        }))

      }
      if (formData.clothType === 'Tshirt') {
        setSwapData(prevState => ({
          ...prevState,
          TshirtList: [...prevState.TshirtList, newProduct]
        }))
      }
      if (formData.clothType === 'Trousers') {
        setSwapData(prevState => ({
          ...prevState,
          TshirtList: [...prevState.TrousersList, newProduct]
        }))

      }
      if (formData.clothType === 'Suit') {
        setSwapData(prevState => ({
          ...prevState,
          SuitList: [...prevState.SuitList, newProduct]
        }))
      }
      console.log(swapData.ShirtList)
      console.log(swapData.PantList)
      console.log(swapData.TshirtList)
      console.log(swapData.TrousersList)
      console.log(swapData.SuitList)


    }


    // Add your form submission logic here
  };

  return (
    <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
      <Card sx={{ maxWidth: 600, width: '100%', boxShadow: 3 }}>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <h2 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Add a Product</h2>
            <Box
              sx={{
                height: '120px',
                borderRadius: '20px',
                border: '2px solid black',
                borderStyle: 'dashed',
                backgroundColor: '#f8f8f8',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={handleImageClick}
            >
              <CloudUploadOutlinedIcon sx={{ height: '50px', width: '50px', color: '#bdbdbd' }} />
              <Typography sx={{ fontFamily: 'Open Sans', color: '#757575' }}>Upload an image</Typography>
            </Box>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            {selectedImage && <Typography sx={{ textAlign: 'center', color: 'green' }}>Image selected: {selectedImage.name}</Typography>}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <Typography>Name:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth

                />
              </Grid>

              <Grid item xs={4}>
                <Typography>Description:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <Typography>Price:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="price"
                  type="text"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <Typography>Product Category:</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth required>
                  <InputLabel>Product Category</InputLabel>
                  <Select
                    name="transactionType"
                    value={formData.transactionType}
                    onChange={handleChange}
                    label="Product Category"
                    required
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="buy">Buy</MenuItem>
                    <MenuItem value="rent">Rent</MenuItem>
                    <MenuItem value="swap">Swap</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <Typography>Product Type:</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth required>
                  <InputLabel>Product Type</InputLabel>
                  <Select
                    name="clothType"
                    value={formData.clothType}
                    onChange={handleChange}
                    label="Product Type"
                    required
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Shirt">Shirt</MenuItem>
                    <MenuItem value="Pant">Pant</MenuItem>
                    <MenuItem value="Tshirt">T-shirt</MenuItem>
                    <MenuItem value="Trousers">Trouser</MenuItem>
                    <MenuItem value="Suit">Suit</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Add Product
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ClothAdder;
