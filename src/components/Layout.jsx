import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Supplier Management
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/orders">Orders</Button>
          <Button color="inherit" component={Link} to="/suppliers">Suppliers</Button>
        </Toolbar>
      </AppBar>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
