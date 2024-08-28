import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateSupplier = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !address) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post('https://supplier-management-backend.onrender.com/api/suppliers', {
        name,
        phone,
        email,
        address
      });
      alert('Supplier created successfully!');
      setName('');
      setPhone('');
      setEmail('');
      setAddress('');
      setError('');
    } catch (error) {
      console.error('Error creating supplier:', error.response?.data || error);
      setError('Error creating supplier. Please check the input data.');
    }
  };

  return (
    <Card className="bg-gray-100 shadow-lg p-4">
      <CardContent>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={() => navigate(-1)} // Navigate back
          className="mb-4"
        >
          Back
        </Button>
        <Typography variant="h5" component="div">
          Create Supplier
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary">
            Create Supplier
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateSupplier;
