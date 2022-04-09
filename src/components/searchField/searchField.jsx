import React from "react";
import './searchField.styles.css'

class SearchField extends React.Component{
  state={
    inputField:''
  }
  handleChange =(e)=>{
    const {value}=e.target;
    console.log(value)

    this.setState({inputField:value})
  
  }
  render(){
    return(
    <div className="searchField">
    
    <i className="fa fa-search"></i>
    <input type="search" placeholder="search for contact"  onChange={this.handleChange}/>
    {/* <span className="clear">&#10005;</span> */}
  </div>
  )};
}
export default SearchField