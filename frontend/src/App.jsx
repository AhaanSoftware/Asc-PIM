import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
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
<<<<<<< HEAD
import AddCollection from './components/Pages/ProductCollection/AddCollection';
function App() {
  const [productData, setProductData] = useState([]);
=======

function App() {
  // State to manage sidebar collapsed or expanded
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

>>>>>>> bfec37f0d1bd329c13660eb5377f86997f69936b
  return (
    <Router>
      <div className="dashboard-container">
        {/* Pass state setter function to Sidebar */}
        <Sidebar setSidebarCollapsed={setSidebarCollapsed} isCollapsed={isSidebarCollapsed} />
        <div className={`main-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
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
  );
}

export default App;
