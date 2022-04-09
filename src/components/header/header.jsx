import React from "react";
import './header.styles.css'
import Button from "../button/button";
import ContactDropdown from "../contact-dropdown/contact-dropdown";
import { connect } from "react-redux";
import togglecCartAction from "../../redux/toggle-dropdown/toggle-dropdown.action";
import { createStructuredSelector } from "reselect";
import { selectContactVisibility } from "../../redux/toggle-dropdown/toggle-dropdown.selector";

const Header =({dropDownVisibility,hidden})=>(
    <div id="header-container">
  <h2 className="header-title">Phone Book</h2>
  <Button onClick={dropDownVisibility}>Add Contact</Button>
  { hidden ? null: <ContactDropdown/> }
</div>
  )


const mapDispatchToProps=dispatch=>({
  dropDownVisibility:()=>dispatch(togglecCartAction())
})

const mapStateToProps = createStructuredSelector({
 hidden:selectContactVisibility
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)