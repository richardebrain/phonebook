import React from "react";
import './contact-list.css'

const ContactList =({lastname,firstname,phoneNo,imgUrl})=>{
 
 return (
  <div className="contact-list">
    <div className="img-bg">
      <img src={imgUrl} alt="image" />
    </div>

    <div className="name-phone">
      <h2>{firstname} {lastname}</h2>
      <span className="phone ">{phoneNo}</span>
    </div>
    <div className="others">

    </div>
  
  </div>

)}
export default ContactList