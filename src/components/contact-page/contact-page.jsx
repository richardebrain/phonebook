import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Datas from '../../others/contacts-data';
import ContactList from '../contact-list/contact-list';
import './contact-page.css'
import { selectContactToView } from '../../redux/contact-reducer/contact.selector';


const ContactsPage = ({contacts})=>{
  console.log(contacts)

  
  return(
  
  <div className='contact-page'>
    {
      contacts.map(({id,...otherProps}) => ( <ContactList  key={id} {...otherProps}/>))
    }
  </div>


);}
const mapStateToProps=createStructuredSelector({
  contacts:selectContactToView
})
export default connect(mapStateToProps)(ContactsPage)