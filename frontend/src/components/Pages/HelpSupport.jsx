import { useState, useEffect } from "react";
import {
  Table,
  FormControl,
  InputGroup,
  Button,
  FormCheck,
} from "react-bootstrap";
import "./HelpSupport.css";

const HelpSupport = () => {
  const [collectionsData, setCollectionsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectAll, setSelectAll] = useState(false); // state for select all checkbox

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
    setSelectedCollections((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((collectionId) => collectionId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
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
    <div className="collections-container">
      <div className="left-side">
        <div className="create-collection-row">
          <p className="collections-label">Collections</p>
          <a href="/new-collections" className="create-collection-link">
            Create Collections
          </a>
        </div>
        <div className="table-content-collection">
          <div className="right-side-search">
            <div className="left-side-all">
              <p className="underline">ALL</p>
            </div>
            <InputGroup className="search-sort-group">
              <FormControl
                placeholder="Search collections"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
              />
              <button variant="outline-secondary" className="sort-button">
                Sort
              </button>
            </InputGroup>
          </div>
          <div className="table-collection">
            <Table
              striped
              bordered
              hover
              responsive
              className="collections-table"
            >
              <thead>
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
                          src={item.imageUrl || "https://via.placeholder.com/100"}
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
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
