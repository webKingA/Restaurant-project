import React , {useState , useContext , useEffect} from 'react';
import '../Styles/Foods.css';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FoodData from '../Contexts/Foods';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';
import PaginationFoods from '../Components/PaginationFoods/PaginationFoods';

export default function Foods() {

  const FoodsContext = useContext(FoodData);

  useEffect(() => {
    setTimeout(() => {
      FoodsContext.setShowToast((prev) => false);
    }, 3000);
  }, [FoodsContext.showToast]);

  return (
    <div>
      <Header />
      <div className="container page__foods__container">
        <div className="page__foods--inputs">
          <div className="page__foods--inputs--search-filter">
            <input
              type="text"
              id="input--search"
              placeholder="Im looking for..."
              value={FoodsContext.valueInputSearch}
              onChange={(e) => FoodsContext.setValueInputSearch(e.target.value)}
            />
            <label htmlFor="input--search">
              <AiOutlineSearch />
            </label>
          </div>
          <div className="page__foods--inputs--box-filter">
            <select>
              <option value="Default">Default</option>
            </select>
          </div>
        </div>
        <div className="pagination__container">
          <PaginationFoods />
        </div>
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
      </div>
      <Footer />
    </div>
  );
}
