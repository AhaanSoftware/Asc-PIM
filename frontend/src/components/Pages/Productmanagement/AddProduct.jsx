import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    media: '',
    category: '',
    price: '',
    compareAtPrice: '',
    chargeTax: false,
    costPerItem: '',
    profit: '',
    margin: '',
    trackQuantity: false,
    quantity: 0,
    shopLocation: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="add-product-container">
      <h2 className="page-title">Add Product</h2>

      <form className="add-product-form">
        {/* Basic Product Information */}
        <div className="section product-info">
          <h3 className="section-title">Product Information</h3>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={productData.title}
              onChange={handleInputChange}
              placeholder="Short sleeve t-shirt"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              placeholder="Enter product description"
              rows="4"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="media">Media</label>
            <div className="media-upload">
              <button type="button" className="upload-btn">
                Upload new
              </button>
              <button type="button" className="select-existing-btn">
                Select existing
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
            >
              <option value="">Select category</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="section pricing-section">
          <h3 className="section-title">Pricing</h3>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              placeholder="₹ 0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="compareAtPrice">Compare-at price</label>
            <input
              type="number"
              id="compareAtPrice"
              name="compareAtPrice"
              value={productData.compareAtPrice}
              onChange={handleInputChange}
              placeholder="₹ 0.00"
            />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="chargeTax"
              name="chargeTax"
              checked={productData.chargeTax}
              onChange={handleInputChange}
            />
            <label htmlFor="chargeTax">Charge tax on this product</label>
          </div>

          <div className="form-group">
            <label htmlFor="costPerItem">Cost per item</label>
            <input
              type="number"
              id="costPerItem"
              name="costPerItem"
              value={productData.costPerItem}
              onChange={handleInputChange}
              placeholder="₹ 0.00"
            />
          </div>

          <div className="form-group">
            <label>Profit</label>
            <input type="text" value={productData.profit || '--'} readOnly />
          </div>

          <div className="form-group">
            <label>Margin</label>
            <input type="text" value={productData.margin || '--'} readOnly />
          </div>
        </div>

        {/* Inventory Section */}
        <div className="section inventory-section">
          <h3 className="section-title">Inventory</h3>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="trackQuantity"
              name="trackQuantity"
              checked={productData.trackQuantity}
              onChange={handleInputChange}
            />
            <label htmlFor="trackQuantity">Track quantity</label>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="shopLocation">Shop location</label>
            <input
              type="text"
              id="shopLocation"
              name="shopLocation"
              value={productData.shopLocation}
              onChange={handleInputChange}
              placeholder="Enter shop location"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn save-btn">
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
