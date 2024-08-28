import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !quantity || !addressFrom || !addressTo) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post('https://supplier-management-backend.onrender.com/api/orders', {
        name,
        quantity,
        addressFrom,
        addressTo,
      });
      alert('Order created successfully!');
      setName('');
      setQuantity('');
      setAddressFrom('');
      setAddressTo('');
      setError('');
    } catch (error) {
      console.error('Error creating order:', error.response?.data || error);
      setError('Error creating order. Please check the input data.');
    }
  };

  return (
    <Card className="bg-gray-100 shadow-lg p-4">
      <CardContent>
        <Typography variant="h5" component="div">
          Create Order
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Item"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Quantity"
            variant="outlined"
            type="number"
            fullWidth
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            label="Address From"
            variant="outlined"
            fullWidth
            value={addressFrom}
            onChange={(e) => setAddressFrom(e.target.value)}
          />
          <TextField
            label="Address To"
            variant="outlined"
            fullWidth
            value={addressTo}
            onChange={(e) => setAddressTo(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary">
            Create Order
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default OrderForm;
