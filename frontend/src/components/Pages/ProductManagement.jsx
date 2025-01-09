import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductManagement.css';
import ImportModal from './Productmanagement/ImportModal';

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/product-management/add-product'); 
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="product-management-header">Products</div>
      <div className="button-group">
        <button className='import'>Import</button>
        <button className='import'>Export</button>
        <button className='import'>Add to cart</button>
      </div>
      <div className="product-management">
      <h2 className="heading">Add your products</h2>
      <p className="subheading">
        Start by stocking your store with products your customers will love
      </p>
      <div className="buttons">
        <button className="btn add-product" onClick={handleAddProduct}>
          + Add product
        </button>
        <button className="btn import-product" onClick={handleOpenModal}>
          Import
        </button>
      </div>
      {isModalOpen && <ImportModal onClose={handleCloseModal} />}
    </div>
    </div>
  );
};

export default ProductManagement;
