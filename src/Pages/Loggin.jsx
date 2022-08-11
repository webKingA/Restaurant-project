import React from "react";
import "../Styles/Loggin.css";
import { Link } from "react-router-dom";

export default function Loggin() {
  return (
    <div className="loggin">
      <form>
        <input type="text" placeholder="Username : " />
        <input type="password" placeholder="Password : " />
        <Link to={'/home'}>Loggin</Link>
        <p>Dont have an account ? <Link to={'/rigester'}>Create an account</Link></p>
      </form>
    </div>
  );
}
