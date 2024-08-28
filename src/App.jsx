import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SupplierList from './components/supplierList';
import SupplierProfile from './components/SupplierProfile';
import CreateSupplier from './components/CreateSupplier';
import OrderForm from './components/OrderForm';
import OrderTracking from './components/OrderTracking';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div className="text-center text-2xl">Welcome to Supplier Management System</div>} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/suppliers/create" element={<CreateSupplier />} />
          <Route path="/suppliers/:supplierId" element={<SupplierProfile />} />
          <Route path="/orders" element={<OrderTracking />} />
          <Route path="/orders/create" element={<OrderForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
