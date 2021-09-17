import React from "react";
import "../css/Account.css";
import "../css/masjid.css";
import { Link,useParams } from "react-router-dom";

const MasjidTransaction = (props) => {

  const { id } = useParams();
  return (
    <Link to={`/masjid/${props.masjid[0].id}/${id}`} style={{textDecoration:"none"}}>
    <div className="account_ledger_details">
    
      <div className="amount">
        <span id="amount">{props.data.amount}</span>
      </div>
      <div className="province">
        <span id="area">{props.masjid[0].province}</span>
      </div>
      <div className="ares">
        <span id="area">{props.masjid[0].area}</span>
      </div>
      <div className="masjid_name">
        <span id="name">{props.masjid[0].name}</span>
      </div>
      <div className="masjid_number">
        <span id="id">{props.data.masjidId}</span>
      </div>
      
    </div>
    </Link>
  );
};

export default MasjidTransaction