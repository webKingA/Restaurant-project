import React, { useState } from "react";
import "./FoodsListHome.css";

export default function FoodsListHome() {
  const [data, setData] = useState([
    { id: 1, img: "./images/category-01.png", p: "Fastfood" },
    { id: 2, img: "./images/category-02.png", p: "Pizza" },
    { id: 3, img: "./images/category-03.png", p: "Asian Food" },
    { id: 4, img: "./images/category-04.png", p: "Row Meat" },
  ]);

  return (
    <div className="container foods-list-home">
      {data.map((item) => (
        <div className="foods-list-home-box" key={item.id}>
          <img src={item.img} alt="" />
          <p>{item.p}</p>
        </div>
      ))}
    </div>
  );
}
