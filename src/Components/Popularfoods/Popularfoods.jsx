import React, { useEffect, useState, useRef, useContext } from "react";
import "./Popularfoods.css";
import { FaTimes } from "react-icons/fa";
import foods from "../../Contexts/Foods";

export default function Popularfoods() {
  const [active, setActive] = useState("All");

  const FoodsContext = useContext(foods);

  useEffect(() => {
    setTimeout(() => {
      FoodsContext.setShowToast((prev) => false);
    }, 3000);
  }, [FoodsContext.showToast]);

  return (
    <section className="container popular-food">
      <h1>Popular Foods</h1>
      <ul>
        <li
          className={active === "All" ? "active-foods" : ""}
          onClick={() => setActive((prev) => "All")}
        >
          All
        </li>
        <li
          className={active === "Burger" ? "active-foods" : ""}
          onClick={() => setActive((prev) => "Burger")}
        >
          <img src="./images/hamburger.png" alt="" />
          Burger
        </li>
        <li
          className={active === "Pizza" ? "active-foods" : ""}
          onClick={() => setActive((prev) => "Pizza")}
        >
          <img src="./images/pizza.png" alt="" />
          Pizza
        </li>
        <li
          className={active === "Bread" ? "active-foods" : ""}
          onClick={() => setActive((prev) => "Bread")}
        >
          <img src="./images/bread.png" alt="" />
          Bread
        </li>
      </ul>
      <dir className="all-foods-box">
        {active === "All" &&
          FoodsContext.foodsData.map((item) => (
            <div className="foods-box" key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <div>
                <p>${item.price}</p>
                <button
                  className="btn btn-red"
                  onClick={() => {
                    FoodsContext.setShowToast((prev) => true);

                    let isInCart = FoodsContext.shopItemDatas.some(
                      (bagItem) => bagItem.title === item.title
                    );

                    FoodsContext.setTotalPrice((prev) => prev + item.price);

                    if (!isInCart) {
                      let newUserProductShop = {
                        id: FoodsContext.shopItemDatas.length + 1,
                        title: item.title,
                        img: item.img,
                        price: item.price,
                        number: 1,
                      };

                      FoodsContext.setShopItemDatas((prev) => [
                        ...prev,
                        newUserProductShop,
                      ]);
                    } else {
                      let spredShopDatas = [...FoodsContext.shopItemDatas];

                      spredShopDatas.some((bagItem) => {
                        if (bagItem.title === item.title) {
                          bagItem.number += 1;
                          return true;
                        }
                      });

                      FoodsContext.setShopItemDatas(spredShopDatas);

                      FoodsContext.setTotalPrice((prev) => prev + item.price);
                    }
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}

        {active === "Burger" &&
          FoodsContext.foodsData
            .filter((item) => item.category === "burger")
            .map((item) => (
              <div className="foods-box" key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <div>
                  <p>${item.price}</p>
                  <button
                    className="btn btn-red"
                    onClick={() => {
                      FoodsContext.setShowToast((prev) => true);

                      let isInCart = FoodsContext.shopItemDatas.some(
                        (bagItem) => bagItem.title === item.title
                      );

                      FoodsContext.setTotalPrice((prev) => prev + item.price);

                      if (!isInCart) {
                        let newUserProductShop = {
                          id: FoodsContext.shopItemDatas.length + 1,
                          title: item.title,
                          img: item.img,
                          price: item.price,
                          number: 1,
                        };

                        FoodsContext.setShopItemDatas((prev) => [
                          ...prev,
                          newUserProductShop,
                        ]);
                      } else {
                        let spredShopDatas = [...FoodsContext.shopItemDatas];

                        spredShopDatas.some((bagItem) => {
                          if (bagItem.title === item.title) {
                            bagItem.number += 1;
                            return true;
                          }
                        });

                        FoodsContext.setShopItemDatas(spredShopDatas);

                        FoodsContext.setTotalPrice((prev) => prev + item.price);
                      }
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}

        {active === "Pizza" &&
          FoodsContext.foodsData
            .filter((item) => item.category === "pizza")
            .map((item) => (
              <div className="foods-box" key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <div>
                  <p>${item.price}</p>
                  <button
                    className="btn btn-red"
                    onClick={() => {
                      FoodsContext.setShowToast((prev) => true);

                      let isInCart = FoodsContext.shopItemDatas.some(
                        (bagItem) => bagItem.title === item.title
                      );

                      FoodsContext.setTotalPrice((prev) => prev + item.price);

                      if (!isInCart) {
                        let newUserProductShop = {
                          id: FoodsContext.shopItemDatas.length + 1,
                          title: item.title,
                          img: item.img,
                          price: item.price,
                          number: 1,
                        };

                        FoodsContext.setShopItemDatas((prev) => [
                          ...prev,
                          newUserProductShop,
                        ]);
                      } else {
                        let spredShopDatas = [...FoodsContext.shopItemDatas];

                        spredShopDatas.some((bagItem) => {
                          if (bagItem.title === item.title) {
                            bagItem.number += 1;
                            return true;
                          }
                        });

                        FoodsContext.setShopItemDatas(spredShopDatas);

                        FoodsContext.setTotalPrice((prev) => prev + item.price);
                      }
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}

        {active === "Bread" &&
          FoodsContext.foodsData
            .filter((item) => item.category === "bread")
            .map((item) => (
              <div className="foods-box" key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <div>
                  <p>${item.price}</p>
                  <button
                    className="btn btn-red"
                    onClick={() => {
                      FoodsContext.setShowToast((prev) => true);

                      let isInCart = FoodsContext.shopItemDatas.some(
                        (bagItem) => bagItem.title === item.title
                      );

                      FoodsContext.setTotalPrice((prev) => prev + item.price);

                      if (!isInCart) {
                        let newUserProductShop = {
                          id: FoodsContext.shopItemDatas.length + 1,
                          title: item.title,
                          img: item.img,
                          price: item.price,
                          number: 1,
                        };

                        FoodsContext.setShopItemDatas((prev) => [
                          ...prev,
                          newUserProductShop,
                        ]);
                      } else {
                        let spredShopDatas = [...FoodsContext.shopItemDatas];

                        spredShopDatas.some((bagItem) => {
                          if (bagItem.title === item.title) {
                            bagItem.number += 1;
                            return true;
                          }
                        });

                        FoodsContext.setShopItemDatas(spredShopDatas);

                        FoodsContext.setTotalPrice((prev) => prev + item.price);
                      }
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
      </dir>
      <div
        className={
          FoodsContext.showToast === true
            ? "container__toast active-toast"
            : "container__toast"
        }
      >
        <FaTimes />
        <p>...محصول مورد نظر شما به سبد خرید اضافه شد</p>
      </div>
    </section>
  );
}
