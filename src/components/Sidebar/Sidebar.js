import React from 'react';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column bg-light position-fixed">
      <FaBars size={20} className="menu-icon" />
      <nav className="d-flex flex-column justify-content-center align-items-center mt-5">
        <a href="#" className="nav-link text-center my-2">
          <i className="bi bi-box-seam nav-icon"></i>
        </a>
        <a href="#" className="nav-link text-center my-2">
          <i className="bi bi-cart4 nav-icon"></i>
        </a>
        <a href="#" className="nav-link text-center my-2">
          <i className="bi bi-receipt nav-icon"></i>
        </a>
        <a href="#" className="nav-link text-center my-2">
          <i className="bi bi-shop nav-icon"></i>
        </a>
        <a href="#" className="nav-link text-center my-2">
          <i className="bi bi-receipt-cutoff nav-icon"></i>
        </a>
        <a href="#" className="nav-link text-center my-2">
          <i className="bi bi-house-gear nav-icon"></i>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
