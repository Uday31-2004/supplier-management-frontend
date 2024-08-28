import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of suppliers from the backend
    axios.get('https://supplier-management-backend.onrender.com/api/suppliers', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        setSuppliers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching suppliers:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <Button 
        variant="outlined" 
        color="primary" 
        onClick={() => navigate(-1)} // Navigate back
        className="mb-4"
      >
        Back
      </Button>
      <Typography variant="h4" component="h1" gutterBottom>
        Supplier List
      </Typography>
      <div className="mb-4">
        <Link to="/suppliers/create">
          <Button variant="contained" color="primary">
            Create Supplier
          </Button>
        </Link>
      </div>
      <Grid container spacing={4}>
        {suppliers.map(supplier => (
          <Grid item xs={12} sm={6} md={4} key={supplier._id}>
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
                <div className="mt-4">
                  <Link to={`/suppliers/${supplier._id}`}>
                    <Button variant="outlined" color="primary">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SupplierList;
