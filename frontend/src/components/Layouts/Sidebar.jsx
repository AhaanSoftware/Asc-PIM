import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsList,
  BsHouse,
  BsBox,
  BsLayers,
  BsCart,
  BsGraphUp,
  BsPeople,
  BsGear,
  BsQuestionCircle,
  BsEnvelope,
  BsInfoCircle,
} from "react-icons/bs";
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from 'react-icons/io5'; 
import { FiAlignLeft, FiAlignRight } from "react-icons/fi";

import "./Sidebar.css";
import logo from "../image/logo.png";
import logo2 from "../image/logo2.png"

const Sidebar = ({ setSidebarCollapsed, isCollapsed }) => {
  const toggleSidebar = () => {
    // Toggle the collapsed state of the sidebar
    setSidebarCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <img
          src={isCollapsed ? logo2 : logo} // Conditionally render logo based on collapse state
          alt="Logo"
          className={`logo-img ${isCollapsed ? "collapsed-logo" : ""}`}
        />

        <div className="icon-container">
          {isCollapsed ? (
            <IoChevronForwardCircleOutline
              className="toggle-icon-f"
              onClick={toggleSidebar} // Clicking the icon will toggle the sidebar
            />
          ) : (
            <IoChevronBackCircleOutline
              className="toggle-icon-b"
              onClick={toggleSidebar} // Clicking the icon will toggle the sidebar
            />
          )}
        </div>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            <BsHouse className="nav-icon" />
            {!isCollapsed && "Overview"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/product-management"
            className="nav-link"
            activeClassName="active"
          >
            <BsBox className="nav-icon" />
            {!isCollapsed && "Product Management"}
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            to="/inventory-collection"
            className="nav-link"
            activeClassName="active"
          >
            <BsLayers className="nav-icon" />
            {!isCollapsed && "Inventory Collection"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/sales-order-management"
            className="nav-link"
            activeClassName="active"
          >
            <BsCart className="nav-icon" />
            {!isCollapsed && "Sales Order Management"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/analytics-reporting"
            className="nav-link"
            activeClassName="active"
          >
            <BsGraphUp className="nav-icon" />
            {!isCollapsed && "Analytics Reporting"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/suppliers-perchase"
            className="nav-link"
            activeClassName="active"
          >
            <BsPeople className="nav-icon" />
            {!isCollapsed && "Suppliers Perchase"}
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            to="/help-support"
            className="nav-link"
            activeClassName="active"
          >
            <BsQuestionCircle className="nav-icon" />
            {!isCollapsed && "Help Support"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user-management"
            className="nav-link"
            activeClassName="active"
          >
            <BsGear className="nav-icon" />
            {!isCollapsed && "User Management"}
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            <BsInfoCircle className="nav-icon" />
            {!isCollapsed && "About"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            <BsEnvelope className="nav-icon" />
            {!isCollapsed && "Contact"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
