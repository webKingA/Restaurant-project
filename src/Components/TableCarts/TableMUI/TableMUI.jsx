import React , {useContext} from 'react';
import './TableMUI.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import foods from "../../../Contexts/Foods";

export default function TableMUI() {

  const FoodsContext = useContext(foods);

  return (
    <table className="container container__table">
      <tr>
        <th>Image</th>
        <th>Product Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Delete</th>
      </tr>
      {FoodsContext.shopItemDatas.map((item) => (
        <tr>
          <td className="td__img">
            <img src={item.img} alt="" />
          </td>
          <td>{item.title}</td>
          <td>${item.price * item.number}</td>
          <td>{item.number}X</td>
          <td className="td__svg">
            <RiDeleteBin6Line
              onClick={() => {
                let filtered = FoodsContext.shopItemDatas.filter((data) => {
                  return data.title !== item.title;
                });
                FoodsContext.setShopItemDatas(filtered);
                FoodsContext.setTotalPrice((prev) => prev - item.price);
              }}
            />
          </td>
        </tr>
      ))}
    </table>
  );
}
