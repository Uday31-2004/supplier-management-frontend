import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SupplierProfile = () => {
  const { supplierId } = useParams();
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://supplier-management-backend.onrender.com/api/suppliers/${supplierId}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setSupplier(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [supplierId]);

  if (loading) return <div>Loading...</div>;

  if (!supplier) return <div>Supplier not found</div>;

  return (
    <div>
      <Button 
        variant="outlined" 
        color="primary" 
        onClick={() => navigate(-1)} // Navigate back
        className="mb-4"
      >
        Back
      </Button>
      <Card className="bg-gray-100 shadow-lg">
        <CardContent>
          <Typography variant="h5" component="div">
            {supplier.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contact: {supplier.contact}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {supplier.address}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplierProfile;
