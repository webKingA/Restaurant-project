import React from 'react';
import './TastyTreatHome.css';
import {AiOutlineCheckCircle} from 'react-icons/ai';

export default function TastyTreatHome() {
  return (
    <div className="container tasty-treat__container">
      <div className="tasty-treat--left">
        <img src="./images/location.png" alt="" />
      </div>
      <div className="tasty-treat--right">
        <h2>
            Why <span> Tasty Treat</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur explicabo, quo quas nostrum illum ipsam soluta, saepe tempora deserunt earum provident et corrupti porro voluptates, voluptatum quos consequuntur sit iure.</p>
        <ul>
            <li>
                <div>
                    <AiOutlineCheckCircle />
                    <h5> Fresh and tasty foods</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum mollitia</p>
            </li>
            <li>
                <div>
                    <AiOutlineCheckCircle />
                    <h5> Quality Support</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum mollitia</p>
            </li>
            <li>
                <div>
                    <AiOutlineCheckCircle />
                    <h5>Order from any location</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum mollitia</p>
            </li>
        </ul>
      </div>
    </div>
  );
}
