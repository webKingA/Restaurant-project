import React, { useState, useContext, useEffect, useRef } from "react";
import "./PaginationFoods.css";
import FoodData from "../../Contexts/Foods";

export default function PaginationFoods() {
  const FoodsContext = useContext(FoodData);
  let [currentPage, setCurrentPage] = useState(1);
  let pageSize = 10;

  useEffect(() => {
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let findPages = FoodsContext.foodsData.slice(startIndex, endIndex);
    FoodsContext.setTodos(findPages);
  }, [currentPage]);

  return (
    <>
      <div className="pagination-foods">
        {FoodsContext.todos
          .filter((item) => {
            if (FoodsContext.valueInputSearch === "") return item;
            if (
              item.title
                .toLowerCase()
                .includes(FoodsContext.valueInputSearch.toLowerCase())
            )
              return item;
          })
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
                    }
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
      <ul className="pagination--ul">
        <li
          className={currentPage === 1 ? "li-active" : ""}
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          1
        </li>
        <li
          className={currentPage === 2 ? "li-active" : ""}
          onClick={() => {
            setCurrentPage(2);
          }}
        >
          2
        </li>
      </ul>
    </>
  );
}
