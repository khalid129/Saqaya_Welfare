import React from "react";
import { Link } from "react-router-dom";
import "../css/masjid.css";

const Header = (props) => {
  function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    return dd + "-" + mm + "-" + yyyy;
  }
  return (
    <div className="header_div">
      <div className="Header_date">
        <h3>{getDate()}</h3>
      </div>
      <div className="category_name">
        <h1>{props.name}</h1>
      </div>
      <div className="welfare_name">
        <Link to="/home" className="link" style={{ textDecoration: "none" }}>
          <h3>سقایہ ویلفیئر ٹرسٹ سوسائٹی</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;