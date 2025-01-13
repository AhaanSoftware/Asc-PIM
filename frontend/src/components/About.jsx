import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs } from "react-bootstrap";
import "./About.css";

const About = ({ productData }) => {
  const [products, setProducts] = useState(productData);

  const handleDelete = (index) => {
    // Create a new array without the deleted product
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

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
        <Tab eventKey="table2" title="Inventory Table">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="table-primary">
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

        {/* Tab 3 */}
        <Tab eventKey="table3" title="Collection Table">
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

export default About;
