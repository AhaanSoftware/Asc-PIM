import React from 'react'
import { BsBell, BsPerson } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <header className="header d-flex align-items-center justify-content-between px-4">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
        />
      </div>
      <div className="header-icons">
        <BsBell className="icon me-3" />
        <BsPerson className="icon" />
      </div>
    </header>
  )
}

export default Header