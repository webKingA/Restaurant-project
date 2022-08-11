import React , {useRef , useState , useEffect , useContext} from "react";
import "./Header.css";
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link , NavLink } from "react-router-dom";
import ShopItemProduct from "../ShopItemProduct/ShopItemProduct";
import foods from "../../Contexts/Foods";

export default function Header() {

  const showMenu = useRef(null);
  const header__sticky = useRef(null);
  const [active , setActive] = useState('');
  const showShop = useRef(null);

  const FoodsContext3 = useContext(foods);

  function clickBarsHandler () {
    showMenu.current.classList.add('show');
  }

  function clickTimesHandler () {
    showMenu.current.classList.remove("show");
  }

  function clickShowShopHandler () {
    showShop.current.classList.add('off');
  }

  function clickOnShowShopHandler () {
    showShop.current.classList.remove('off');
  }

  useEffect(() => {
    window.addEventListener('scroll' , () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header__sticky.current.classList.add('header__shrink');
      } else {
        header__sticky.current.classList.remove("header__shrink");
      }

      return () => window.removeEventListener('scroll');

    })
  } , [])
  

  return (
    <section className="container__header" ref={header__sticky}>
      <div className="header__logo">
        <img src="./images/res-logo.png" alt="" />
        <h5>Tasty Treat</h5>
      </div>
      <ul className="header__list" ref={showMenu}>
        <FaTimes className="header__list--times" onClick={clickTimesHandler} />
        <NavLink
          to={"/home"}
          className={(Link) => (Link.isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/foods"}
          className={(Link) => (Link.isActive ? "active" : "")}
        >
          Foods
        </NavLink>
        <NavLink
          to={"/carts"}
          className={(Link) => (Link.isActive ? "active" : "")}
        >
          Carts
        </NavLink>
        <NavLink
          to={"/contact"}
          className={(Link) => (Link.isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </ul>
      <div className="header__icons">
        <span className="header__icons--shop">
          <AiOutlineShop onClick={clickOnShowShopHandler} />
          <span className="header__icons--shop-number-top">
            {FoodsContext3.shopItemDatas.length}
          </span>
        </span>
        <span className="header__icons--login">
          <Link to={"/"}>
            <AiOutlineUser />
          </Link>
        </span>
        <span className="header__icons--bars">
          <FaBars onClick={clickBarsHandler} />
        </span>
        <div className="showShop off" ref={showShop}>
          <FaTimes onClick={clickShowShopHandler} />
          <ShopItemProduct />
          <div className="showshop--down">
            <p>Subtotal : ${FoodsContext3.totalPrice}</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}
