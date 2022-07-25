import React from 'react';
import { FaChevronLeft, FaCog } from 'react-icons/fa';
import '../Styles/Header.css';

const Header = () => (
  <div className="header-bar">
    <div><FaChevronLeft /></div>
    <h1>Kiboma Store</h1>
    <div><FaCog /></div>
  </div>
);

export default Header;
