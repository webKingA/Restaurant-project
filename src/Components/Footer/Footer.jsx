import React from "react";
import "./Footer.css";
import { FiSend, FiFacebook, FiGithub, FiYoutube , FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <section className="container__footer">
      <div className="footer--top">
        <div className="footer--top-one">
          <img src="./images/res-logo.png" alt="" />
          <h5>Tasty Treat</h5>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          </small>
        </div>
        <div className="footer--top-two">
          <h3>Delivery Time</h3>
          <h5>Sunday - Thursday</h5>
          <p>10:00 am - 11:00 pm</p>
          <div>
            <h5>Friday - Saturday</h5>
            <p>off day</p>
          </div>
        </div>
        <div className="footer--top-three">
            <h3>Contact</h3>
            <p>Location : Iran , Mashhad , Neyshabur</p>
            <h5>Phone : 09304144479</h5>
            <h5>Email : www.a.jvd.neya.81@gmail.com</h5>
        </div>
        <div className="footer--top-four">
            <h3>Newsletter</h3>
            <p>Subscribe Our Newsletter</p>
            <div>
                <input type="text" placeholder="Enter Your Email : " />
                <FiSend />
            </div>
        </div>
      </div>
      <div className="footer--down">
        <small>© - 2022 Website Made By Abolfazl Javadineya . All Right Reserved</small>
        <div>
            <p>Follow : </p>
            <FiFacebook />
            <FiGithub />
            <FiYoutube />
            <FiLinkedin />
        </div>
      </div>
    </section>
  );
}
