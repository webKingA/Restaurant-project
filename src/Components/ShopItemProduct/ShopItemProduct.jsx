import React , {useContext, useEffect} from "react";
import "./ShopItemProduct.css";
import { FaTimes } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import foods from '../../Contexts/Foods';

export default function ShopItemProduct() {

  const FoodsContext2 = useContext(foods);

  return (
    <div className="shop-item-product">
      {FoodsContext2.shopItemDatas.map((item) => (
        <div className="shop-item-product-box" key={item.id}>
          <div className="shop-item-product-box--left">
            <img src={item.img} alt="" />
            <div className="shop-item-product-box--left-nth2">
              <h5>{item.title}</h5>
              <div className="shop-item-product-box--left-price">
                <small>{item.number}X</small>
                <p>${item.price * item.number}</p>
              </div>
              <div className="shop-item-product-box--left-number">
                <BsPlusLg onClick={() => {
                  
                  let spredShopDatas = [...FoodsContext2.shopItemDatas];

                  spredShopDatas.some((bagItem) => {
                    if (bagItem.title === item.title) {
                      bagItem.number += 1;
                      return true;
                    }
                  });

                    FoodsContext2.setShopItemDatas(spredShopDatas);

                    FoodsContext2.setTotalPrice((prev) => prev + item.price);

                }} />
                <span>1</span>
                <BiMinus onClick={() => {

                  let spredShopDatas = [...FoodsContext2.shopItemDatas];

                  spredShopDatas.some((bagItem) => {
                    if (bagItem.title === item.title) {
                      bagItem.number -= 1;
                      return true;
                    }
                  });

                  FoodsContext2.setShopItemDatas(spredShopDatas);

                  FoodsContext2.setTotalPrice((prev) => prev - item.price);

                }} />
              </div>
            </div>
          </div>
          <div className="shop-item-product-box--right">
            <FaTimes onClick={() => {

              let spredShopDatas = [...FoodsContext2.shopItemDatas];

              let filteredItem = spredShopDatas.filter(bagItem => {
                return bagItem.title !== item.title;
              })

              FoodsContext2.setShopItemDatas(filteredItem);

              FoodsContext2.setTotalPrice((prev) => prev - item.price * item.number);

            }} />
          </div>
        </div>
      ))}
    </div>
  );
}
