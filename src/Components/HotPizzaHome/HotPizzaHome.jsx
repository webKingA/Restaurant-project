import React, { useState , useContext } from "react";
import "./HotPizzaHome.css";
import foods from "../../Contexts/Foods";

export default function HotPizzaHome() {

  const [data, setData] = useState([
    {
      id: 1,
      img: "./images/product_2.1.jpg",
      title: "Vegetarian Pizza",
      price: 115,
      number: 1,
    },
    {
      id: 2,
      img: "./images/product_2.2.jpg",
      title: "Vegetarian Pizza2",
      price: 110,
      number: 1,
    },
    {
      id: 3,
      img: "./images/product_2.3.jpg",
      title: "Vegetarian Pizza3",
      price: 110,
      number: 1,
    },
    {
      id: 4,
      img: "./images/product_3.1.jpg",
      title: "Vegetarian Pizza4",
      price: 115,
      number: 1,
    },
  ]);

  const FoodsContext4 = useContext(foods);

  return (
    <div className="container hot-pizza__container">
      <h2>Hot Pizza</h2>
      <div className="hot-pizza__boxes">
        {data.map((item) => (
          <div className="hot-pizza--box" key={item.id}>
            <img src={item.img} alt="" />
            <h5>{item.title}</h5>
            <div>
              <p>${item.price}</p>
              <button className="btn btn-red" onClick={() => {

                let isInCart = FoodsContext4.shopItemDatas.some(
                      (bagItem) => bagItem.title === item.title
                );

                    FoodsContext4.setTotalPrice(prev => prev + item.price)

                    if (!isInCart) {
                      let newUserProductShop = {
                        id: FoodsContext4.shopItemDatas.length + 1,
                        title: item.title,
                        img: item.img,
                        price: item.price,
                        number: 1
                      };

                      FoodsContext4.setShopItemDatas((prev) => [
                        ...prev,
                        newUserProductShop,
                      ]);

                    } else {

                      let spredShopDatas = [...FoodsContext4.shopItemDatas];

                      spredShopDatas.some(bagItem => {
                        if (bagItem.title === item.title) {
                          bagItem.number += 1;
                          return true;
                        }
                      })
                        
                        FoodsContext4.setShopItemDatas(spredShopDatas);

                        FoodsContext4.setTotalPrice((prev) => prev + item.price);

              }}} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
