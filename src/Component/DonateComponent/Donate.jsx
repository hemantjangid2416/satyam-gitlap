import React from "react";
import "./donate_style.css";
import qrImage from "../../Images/qr.png";

const Donate = () => {
  return (
    <div className="donate_master">

      <div className="donate_payment">

        <div className="donate_qr" >
          <img src={qrImage} width="60%" alt="qr code" />
        </div>
        <div className="donate_account_details" >
          <b>Name</b>
          <p>Daanpatra Foundation</p>

          <b>Account Number</b>
          <p>076288700000243</p>

          <b>IFSC</b>
          <p>YESB0000762</p>

          <b>Branch</b>
          <p>Vijay Nagar , Indore</p>
        </div>

      </div>

    </div>
  );
};

export default Donate;
