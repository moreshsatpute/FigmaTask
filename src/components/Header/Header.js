import React from 'react';
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../../assets/avatar.jpg';

function Header() {
  return (
    <header className="fixed-top bg-light shadow-sm p-2 d-flex justify-content-end align-items-center" style={{ width: '100%', height: '72px' }}>
      <div className="header-right col-2 p-1">
        <div className="d-flex align-items-center">
          <IoMdNotificationsOutline size={30} className="mx-3" />
          <CiSettings size={30} className="mx-3" />
          <img src={avatar} alt="avatar" className="rounded-circle ms-2" style={{ width: '50px', height: '50px' }} />
        </div>
        </div>
    </header>
  );
}

export default Header;

