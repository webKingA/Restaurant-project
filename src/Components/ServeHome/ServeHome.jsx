import React, { useState } from 'react';
import './ServeHome.css';

export default function ServeHome() {

  const [data, setData] = useState([
    { id: 1, img: "./images/service-01.png", h2: "Quic Delivery" },
    { id: 2, img: "./images/service-02.png", h2: "Super Dine In" },
    { id: 3, img: "./images/service-03.png", h2: "Easy Pick Up" },
  ]);

  return (
    <div className="container serve-home">
      <h3>What we serve</h3>
      <h2>
        Just sit back at home we will
        <span> take care</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        reiciendis at
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        reiciendis at
      </p>
      <div className="serve-home--box">
        {data.map((item) => (
          <div className="serve-home--box-one" key={item.id}>
            <img src={item.img} alt="" />
            <h2>{item.h2}</h2>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quis, dignissimos suscipit illum veritatis pariatur quae quibusdam
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
