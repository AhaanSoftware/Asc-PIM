import { useState, useEffect } from "react";
import { Table, FormControl, InputGroup, FormCheck, Button } from "react-bootstrap";
import "./HelpSupport.css";

const HelpSupport = () => {
  const [collectionsData, setCollectionsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("collectionsData")) || [
      {
        id: 1,
        imageUrl: "",
        title: "Collection 1",
        shortDescription: "Short description of collection 1.",
        totalItems: 10,
      },
      {
        id: 2,
        imageUrl: "",
        title: "Collection 2",
        shortDescription: "Short description of collection 2.",
        totalItems: 15,
      },
    ];
    setCollectionsData(data);
  }, []);

  const handleSelectCollection = (id) => {
    setSelectedCollections((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((collectionId) => collectionId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCollections([]);
    } else {
      setSelectedCollections(collectionsData.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const filteredData = collectionsData.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.shortDescription.toLowerCase().includes(query)
    );
  });

  return (
    <div className="help-support-container container mt-5">
      <div className="header d-flex justify-content-between align-items-center mb-4">
        <h4 className="collections-label">Help & Support - Collections</h4>
        <a href="/add-collection" className="btn btn-outline-primary create-collection-link">
          Create Collections
        </a>
      </div>

      <div className="search-bar-wrapper mb-3">
        <InputGroup>
          <FormControl
            placeholder="Search collections"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
          <Button variant="outline-secondary" className="sort-button">
            Sort
          </Button>
        </InputGroup>
      </div>

      <Table striped bordered hover responsive className="collections-table">
        <thead className="table-primary">
          <tr>
            <th>
              <FormCheck
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>Image</th>
            <th>Title</th>
            <th>Short Description</th>
            <th>Total Items</th>
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
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>
                  <FormCheck
                    type="checkbox"
                    checked={selectedCollections.includes(item.id)}
                    onChange={() => handleSelectCollection(item.id)}
                  />
                </td>
                <td>
                  <img
                    src={item.imageUrl || "https://via.placeholder.com/80"}
                    alt={item.title}
                    className="collection-image"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.shortDescription}</td>
                <td>{item.totalItems}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default HelpSupport;
