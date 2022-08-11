import React from 'react';
import "../Styles/Carts.css";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import TableCarts from '../Components/TableCarts/TableCarts';

export default function Carts() {
  return (
    <div>
      <Header />
      <TableCarts />
      <Footer />
    </div>
  );
}
