import React from "react";
import "./FirstPageHome.css";
import {MdOutlineRemoveShoppingCart} from 'react-icons/md';
import { BsShieldCheck } from "react-icons/bs";

export default function FirstPageHome() {
  return (
    <section className="container first-page-home">
      <div className="first-page-home--text">
        <h3>Easy way to make an order</h3>
        <h1>
          <span>HUNGRY ? </span>
          Just Wait Food at
          <span> your door</span>
        </h1>
        <small>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate in
          ipsum sequi veniam nihil reprehenderit quaerat tempore sit deserunt.
          Ducimus
        </small>
        <div className="first-page-home--text--btns">
          <button className="btn btn-red">Order now</button>
          <button className="btn">See all foods</button>
        </div>
        <div className="first-page-home--text--icons">
          <span>
            <MdOutlineRemoveShoppingCart />
            No Shopping Charge
          </span>
          <span>
            <BsShieldCheck />
            100 % secure checkout
          </span>
        </div>
      </div>
      <div className="first-page-home--img">
        <img src="./images/hero.png" alt="" />
      </div>
    </section>
  );
}
