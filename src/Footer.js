import React from 'react';
import logo from './logo.svg';

export default function Footer() {
  return (
    <div className="footer">
      <img src={logo} className="logo" alt="logo" />
      <span><a href="/">React Ders Notları</a></span>

    </div>);
}