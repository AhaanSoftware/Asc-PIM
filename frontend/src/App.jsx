import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Layouts/Sidebar';
import Header from './components/Layouts/Header';
import Overview from './components/Pages/Overview';
import About from './components/About';
import Contact from './components/Contact';
import AnalyticsReporting from './components/Pages/AnalyticsReporting';
import HelpSupport from './components/Pages/HelpSupport';
import InventoryCollection from './components/Pages/InventoryCollection';
import ProductManagement from './components/Pages/ProductManagement';
import SalesOrderManagement from './components/Pages/SalesOrderManagement';
import SuppliersPerchase from './components/Pages/SuppliersPerchase';
import UserManagement from './components/Pages/UserManagement';
import AddProduct from './components/Pages/Productmanagement/AddProduct';
import AddCollection from './components/Pages/ProductCollection/AddCollection';
function App() {
  const [productData, setProductData] = useState([]);
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content-wrapper p-4">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/about" element={<About productData={productData} />}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/analytics-reporting" element={<AnalyticsReporting />} />
              <Route path="/help-support" element={<HelpSupport />} />
              <Route path="/inventory-collection" element={<InventoryCollection />} />
              <Route path="/product-management" element={<ProductManagement />} />
              <Route path="/product-management/add-product" element={<AddProduct setProductData={setProductData} />} />
              <Route path="/sales-order-management" element={<SalesOrderManagement />} />
              <Route path="/suppliers-perchase" element={<SuppliersPerchase />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/add-collection" element={<AddCollection />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
