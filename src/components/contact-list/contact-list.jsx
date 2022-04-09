import React from "react";
import { connect } from "react-redux";
import { removeContact } from "../../redux/contact-reducer/contact.action";
import './contact-list.css'

const ContactList =({contact,removeContactFromPage})=>{
  const {lastname,firstname,phoneNo,imgUrl}=contact
 
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
        <span className="clear-contact" onClick={()=>removeContactFromPage(contact)}>&#10005;</span>

    </div>
  
  </div>

)}

const mapDispatchToProps=dispatch=>({
removeContactFromPage:contact=>dispatch(removeContact(contact))
})
export default connect(null,mapDispatchToProps)(ContactList)