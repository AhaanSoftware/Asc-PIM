import React, { useEffect, useState } from 'react';
import { Table, FormControl, InputGroup } from 'react-bootstrap';

const InventoryCollection = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch the inventory data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('inventoryData')) || [];
    setInventoryData(data);
  }, []);

  // Handle changes in stock value
  const handleStockChange = (index, value) => {
    const updatedData = [...inventoryData];
    updatedData[index].stock = value;

    // Update the state
    setInventoryData(updatedData);

    // Save updated data to localStorage
    localStorage.setItem('inventoryData', JSON.stringify(updatedData));
  };

  // Handle changes in reserved value
  const handleReservedChange = (index, value) => {
    const updatedData = [...inventoryData];
    updatedData[index].reserved = value;

    // Update the state
    setInventoryData(updatedData);

    // Save updated data to localStorage
    localStorage.setItem('inventoryData', JSON.stringify(updatedData));
  };

  // Handle changes in available value
  const handleAvailableChange = (index, value) => {
    const updatedData = [...inventoryData];
    updatedData[index].available = value;

    // Update the state
    setInventoryData(updatedData);

    // Save updated data to localStorage
    localStorage.setItem('inventoryData', JSON.stringify(updatedData));
  };

  // Filter inventory data based on the search query
  const filteredData = inventoryData.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.location.toLowerCase().includes(query) ||
      item.stock.toString().includes(query) ||
      item.reserved.toString().includes(query) ||
      item.available.toString().includes(query) ||
      item.sku.toLowerCase().includes(query)
    );
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div  style={{display:'flex'}}>
           <h1>Inventory Table</h1>
          <div style={{ marginBottom: '15px', marginTop: '15px', float:'right' }}>
                  <InputGroup className="mb-3" style={{ maxWidth: '300px' }}>
                    <FormControl
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </InputGroup>
          </div>
        </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Location</th>
            <th>Stock</th>
            <th>Reserved</th>
            <th>Available</th>
            <th>SKU</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
              </td>
            </tr>
          ) : (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.location}</td>
                <td>
                  <FormControl
                    type="number"
                    value={item.stock}
                    onChange={(e) => handleStockChange(index, e.target.value)}
                    style={{ width: '100px' }}
                  />
                </td>
                <td>
                  <FormControl
                    type="number"
                    value={item.reserved}
                    onChange={(e) => handleReservedChange(index, e.target.value)}
                    style={{ width: '100px' }}
                  />
                </td>
                <td>
                  <FormControl
                    type="number"
                    value={item.available}
                    onChange={(e) => handleAvailableChange(index, e.target.value)}
                    style={{ width: '100px' }}
                  />
                </td>
                <td>{item.sku}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryCollection;
