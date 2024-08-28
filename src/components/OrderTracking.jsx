import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OrderTracking = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://supplier-management-backend.onrender.com/api/orders', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <Typography variant="h4" component="h1" gutterBottom>
        Order Tracking
      </Typography>
      <div className="mb-4">
        <Link to="/orders/create">
          <Button variant="contained" color="primary">
            Place New Order
          </Button>
        </Link>
      </div>
      {orders.length === 0 ? (
        <Typography variant="body1">No orders found</Typography>
      ) : (
        orders.map(order => (
          <Card key={order._id} className="bg-gray-100 shadow-lg">
            <CardContent>
              <Typography variant="h5" component="div">
                Order #{order._id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Supplier ID: {order.supplierId}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Item: {order.items.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity: {order.items.quantity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {order.status}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default OrderTracking;
