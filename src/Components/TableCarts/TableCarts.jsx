import React , {useContext} from "react";
import "./TableCarts.css";
import TableMUI from "./TableMUI/TableMUI";
import {Link} from 'react-router-dom';
import foods from '../../Contexts/Foods';

export default function TableCarts() {

  const FoodsContext = useContext(foods);

  return (
    <div className="container table-carts">
      <TableMUI />
      <div className="table__total-price">
        <h4>
          SubTotal : <span>${FoodsContext.totalPrice}</span>
        </h4>
        <p>Taxes and Shipping will calculate at checkout</p>
        <div className="table__btns">
          <Link to='/foods'>Countinue Shopping</Link>
          <Link to='/bill'>Proceed to checkout</Link>
        </div>
      </div>
    </div>
  );
}
