import React , {useState} from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import AllRoutes from './Router';
import foods from "./Contexts/Foods";
import FoodsData from "./FoodsData";

export default function App() {

  const routes = useRoutes(AllRoutes);

  const [foodsData, setFoodsData] = useState(FoodsData);
  const [shopItemDatas, setShopItemDatas] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [todos, setTodos] = useState([]);
  const [valueInputSearch, setValueInputSearch] = useState("");
  const [ship , setShip] = useState(30);

  return (
    <div className="app">
      <foods.Provider
        value={{
          foodsData,
          shopItemDatas,
          setShopItemDatas,
          totalPrice,
          setTotalPrice,
          showToast,
          setShowToast,
          todos,
          setTodos,
          valueInputSearch,
          setValueInputSearch,
          ship,
          setShip
        }}
      >
        {routes}
      </foods.Provider>
    </div>
  );
}
