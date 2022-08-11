import React , {useState , useContext} from "react";
import "../Styles/Home.css";
import Header from "../Components/Header/Header";
import FirstPageHome from "../Components/FirstPageHome/FirstPageHome";
import FoodsListHome from "../Components/FoodsListHome/FoodsListHome";
import ServeHome from "../Components/ServeHome/ServeHome";
import Popularfoods from "../Components/Popularfoods/Popularfoods";
import Footer from "../Components/Footer/Footer";
import TastyTreatHome from "../Components/TastyTreatHome/TastyTreatHome";
import HotPizzaHome from "../Components/HotPizzaHome/HotPizzaHome";
import TestimonialHome from "../Components/TestimonialHome/TestimonialHome";

export default function Home() {

  return (
    <div>
        <Header />
        <FirstPageHome />
        <FoodsListHome />
        <ServeHome />
        <Popularfoods />
        <TastyTreatHome />
        <HotPizzaHome />
        <TestimonialHome />
        <Footer />
    </div>
  );
}
