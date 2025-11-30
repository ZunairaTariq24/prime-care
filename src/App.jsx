import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Partners from '@/pages/Partners';
import Principles from '@/pages/Principles';
import Products from '@/pages/Products';
import InternationalDivision from '@/pages/InternationalDivision';
import CSR from '@/pages/CSR';
import HumanResources from '@/pages/HumanResources';
import ContactUs from '@/pages/ContactUs';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import { DataProvider } from '@/context/DataContext';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <DataProvider>
      <Router>
        <Helmet>
          <title>Prime Care Group Of Companies</title>
          <meta name="description" content="Prime Care Group Of Companies - Leading pharmaceutical company providing quality healthcare solutions" />
        </Helmet>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="partners" element={<Partners />} />
            <Route path="principles" element={<Principles />} />
            <Route path="products" element={<Products />} />
            <Route path="international-division" element={<InternationalDivision />} />
            <Route path="csr" element={<CSR />} />
            <Route path="human-resources" element={<HumanResources />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </DataProvider>
  );
}

export default App;