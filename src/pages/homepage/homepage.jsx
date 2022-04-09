import React from "react";
import ContactsPage from "../../components/contact-page/contact-page";
import Header from "../../components/header/header";
import './homepage.styles.css';
import SearchField from "../../components/searchField/searchField";


const Homepage =()=>(
  <div id="homepage">
    <Header/>
    <div className="container">
    <SearchField/>
    <ContactsPage/>
    </div>

  </div>
);
export default Homepage