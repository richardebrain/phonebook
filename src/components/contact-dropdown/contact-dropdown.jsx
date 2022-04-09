import React from "react";
import "./contact-dropdown.styles.css";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { connect } from "react-redux";
import addContacts from "../../redux/contact-reducer/contact.action";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const ContactDropdown = ({ addContact }) => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    phoneNo: ""
  });

  const hanleChange = (e) => {
    const { value, name } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    const { firstname, lastname, phoneNo } = state;
   
    if (firstname.length <= 3) {
      
      alert("name must be greater than or equal to 3");
      return;
    } else if (lastname.length <= 3) {
      alert("name must be greater than or equal to 3");
      return;
    } else if (phoneNo.length < 11) {
      alert("phone number must be greater than or equal to 11 digits");
      return;
    }
    const id = uuid();
    addContact([
      {
        firstname,
        lastname,
        phoneNo,
        id,
        imgUrl: "https://robohash.org/R9F.png?set=set2&size=150x150",
      },
    ]);
  };
  // const {addContact}=this.props
  const { firstname, lastname, phoneNo } = state;
  return (
    <form className="contact-dropdown">
      <FormInput
        type="text"
        label="FirstName"
        name="firstname"
        value={firstname}
        onChange={hanleChange}
        required
      />
      <FormInput
        type="text"
        label="LastName"
        name="lastname"
        value={lastname}
        required
        onChange={hanleChange}
      />
      <FormInput
        type="tel"
        label="Phone No"
        name="phoneNo"
        value={phoneNo}
        required
        onChange={hanleChange}
      />
      <Button type="submit" onClick={handleClick}>
        Add To Contact List
      </Button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addContact: (contactToAdd) => dispatch(addContacts(contactToAdd)),
});
export default connect(null, mapDispatchToProps)(ContactDropdown);

// class ContactDropdown extends React.Component {

//   //  htmlId =nextId()
//    state = {
//     firstname: "",
//     lastname: "",
//     phoneNo: '' ,

//   };
//   hanleChange = (e) => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });

//   };
//   handleClick =(e)=>{
//     e.preventDefault();
//     {
//       const{firstname,lastname,phoneNo}=this.state
//       if(firstname.length<=3){
//         alert('name must be greater than or equal to 3');
//         return
//       }else if(lastname.length<=3){
//         alert('name must be greater than or equal to 3')
//         return
//       }else if(phoneNo.length<11){
//         alert('phone number must be greater than or equal to 11 digits')
//         return
//       }
//       const id =uuid()
//       this.props.addContact([
//        { firstname,
//         lastname,
//         phoneNo,
//         id,
//          imgUrl:"https://robohash.org/R9F.png?set=set2&size=150x150"}

//       ]

//       )
//     }

//   }

//   render() {

//     const {lastname,firstname,phoneNo}= this.state
//     // const {addContact}=this.props
//     return (
//       <form className="contact-dropdown">
//         <FormInput
//           type="text"
//           label="FirstName"
//           name="firstname"
//           value={firstname}
//           onChange={this.hanleChange}
//           required
//         />
//         <FormInput
//           type="text"
//           label="LastName"
//           name="lastname"
//           value={lastname}
//           required
//           onChange={this.hanleChange}

//         />
//         <FormInput
//           type="tel"
//           label="Phone No"
//           name="phoneNo"
//           value={phoneNo}
//           required
//           onChange={this.hanleChange}
//         />
//         <Button type="submit" onClick={this.handleClick}>
//           Add To Contact List
//         </Button>
//       </form>
//     );
//   }
// }
// const mapDispatchToProps = dispatch=>({
//   addContact:contactToAdd=>dispatch(addContacts(contactToAdd))
// })
// export default connect(null,mapDispatchToProps)(ContactDropdown);
