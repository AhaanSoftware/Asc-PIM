import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductManagement.css"; // Custom CSS
import ImportModal from "./Productmanagement/ImportModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]); // Product list state
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/product-management/add-product");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="banner text-center py-5 mb-4"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff", // Text color for contrast
        }}
      >
        <div className="container"></div>
      </div>

      {/* Header Section */}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {products.length > 0 && (
            <div className="button-group">
              <button
                className="btn btn-outline-primary me-2"
                onClick={handleOpenModal}
              >
                Import
              </button>
              <button className="btn btn-outline-secondary me-2">Export</button>
              <button className="btn btn-primary" onClick={handleAddProduct}>
                Add Product
              </button>
            </div>
          )}
        </div>

        {/* Product Empty State */}
        {products.length === 0 && (
          <div className="text-center py-5">
            <h3 className="fw-bold mb-3">Add Your Products</h3>
            <p className="text-muted mb-4">
              Start by stocking your store with products your customers will
              love.
            </p>
            <div>
              <button
                className="btn btn-primary me-3"
                onClick={handleAddProduct}
              >
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                Add Product
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={handleOpenModal}
              >
                <FontAwesomeIcon icon={faFileImport} className="me-2" />
                Import
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && <ImportModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default ProductManagement;
