import React , {useContext} from "react";
import "../Styles/Bill.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import foods from '../Contexts/Foods';

export default function Bill() {

    const FoodsContext = useContext(foods);

  return (
    <section className="Bill">
      <Header />
      <div className="container container__bill">
        <div className="container__bill--left">
          <h4>Shopping Address</h4>
          <input type="text" placeholder="Enter Your Name : " />
          <input type="text" placeholder="Enter Your Email : " />
          <input type="text" placeholder="Phone Number : " />
          <input type="text" placeholder="Country : " />
          <input type="text" placeholder="City : " />
          <input type="text" placeholder="Postal Code : " />
          <button className="btn btn-red">Payment</button>
        </div>
        <div className="container__bill--right">
          <p>
            SubTotal : <span>${FoodsContext.totalPrice}</span>
          </p>
          <p>
            Shipping : <span>${FoodsContext.ship}</span>
          </p>
          <h2>
            Total : <span>${FoodsContext.totalPrice + FoodsContext.ship}</span>
          </h2>
        </div>
      </div>
      <Footer />
    </section>
  );
}
