import React from 'react';
import './ImportModal.css';

const ImportModal = ({ onClose }) => {
  return (
    <div className="import-modal-overlay">
      <div className="import-modal">
        <div className="header-modal">
          <p className="modal-title">Import products by CSV</p>
          <span className="close-modal-icon" onClick={onClose}>&times;</span>
        </div>
        <div className="body-modal">
          <div className="upload-area">
            <button className="upload-btn">Add file</button>
          </div>
        </div>
        <div className="footer-modal">
          <a href="#" className="download-sample">Download sample CSV</a>
          <div className="footer-modal-btn">
          <button className="cancel-btn-footer" onClick={onClose}>Cancel</button>
          <button className="upload-preview-btn-footer" disabled>Upload and preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;
