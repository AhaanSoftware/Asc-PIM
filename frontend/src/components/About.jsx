import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs } from "react-bootstrap";
import "./About.css";
import { useLocation } from "react-router-dom";

const About = ({ productData = [], collections = [] }) => {
  const [products, setProducts] = useState(productData);

  const handleDelete = (index) => {
    // Create a new array without the deleted product
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const location = useLocation();
  

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Tabbed Tables</h3>
      {/* Horizontal Tabs */}
      <Tabs
        defaultActiveKey="table1"
        id="horizontal-tabs-example"
        className="mb-3"
        justify // Ensures tabs are aligned horizontally
      >
        {/* Tab 1 */}
        <Tab eventKey="table1" title="Product Table">
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Collection</th>
                  <th>Category</th>
                  <th>Pricing</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.status}</td>
                    <td>{product.collection}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tab>

        {/* Tab 2 */}
        <Tab eventKey="table2" title="Collection Table">
  <div className="table-responsive">
    <table className="table table-striped">
      <thead className="table-primary">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        {collections && collections.length > 0 ? (
          collections.map((collection, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{collection.title}</td>
              <td dangerouslySetInnerHTML={{ __html: collection.description }} />
              <td>{collection.type || "N/A"}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No collections added yet.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</Tab>


        {/* Tab 3 */}
        <Tab eventKey="table3" title="Inventory Table">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-secondary">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Collection</th>
                  <th>Category</th>
                  <th>Pricing</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.status}</td>
                    <td>{product.collection}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

// PropTypes validation
About.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      collection: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

export default About;
