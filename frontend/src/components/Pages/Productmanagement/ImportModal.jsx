import React, { useState } from 'react';
import './ImportModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';  

const ImportModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(false);
  const [fileName, setFileName] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0]; 
    if (uploadedFile) {
      const uploadedFileName = uploadedFile.name;
      const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();
      
      if (fileExtension === 'xlsx' || fileExtension === 'xls') {
        if (uploadedFileName === 'product_file.xlsx' || uploadedFileName === 'product_file.xls') {
          setFile(uploadedFile);
          setFileName(uploadedFileName);
          setIsFileValid(true);
        } else {
          alert('Please upload a file named "product_file.xlsx" or "product_file.xls".');
          setIsFileValid(false);
        }
      } else {
        alert('Please upload a valid Excel file (.xlsx or .xls).');
        setIsFileValid(false);
      }
    }
  };
  const handleDownloadSample = () => {
    const sampleCSV = `product_name,product_price,product_description
Product 1,10.99,Sample product 1
Product 2,15.99,Sample product 2
Product 3,20.99,Sample product 3`;

    const blob = new Blob([sampleCSV], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'product_file.csv';
    link.click();
  };

  return (
    <div className="import-modal-overlay">
      <div className="import-modal">
        <div className="header-modal">
          <p className="modal-title">Import products by CSV</p>
          <span className="close-modal-icon" onClick={onClose}>&times;</span>
        </div>
        <div className="body-modal">
          <div className="upload-area">
            {file ? (
              <div className="file-info">
                <div className="file-icon">
                  <FontAwesomeIcon icon={faPaperclip} /> 
                </div>
                <div className="file-name">{fileName}</div>
                <button
                  className="replace-file-btn"
                  onClick={() => document.getElementById('file-input').click()} 
                >
                  Replace file
                </button>
              </div>
            ) : (
              <button className="upload-btn" onClick={() => document.getElementById('file-input').click()}>
                Add file
              </button>
            )}
            <input
              type="file"
              id="file-input"
              style={{ display: 'none' }}
              accept=".xls,.xlsx"
              onChange={handleFileUpload} 
            />
          </div>
        </div>

        <div className="footer-modal">
          <a href="#" className="download-sample" onClick={handleDownloadSample}>
            Download sample CSV
          </a>
          <div className="footer-modal-btn">
            <button className="cancel-btn-footer" onClick={onClose}>Cancel</button>
            <button
              className="upload-preview-btn-footer"
              disabled={!isFileValid}
            >
              Upload and preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;
