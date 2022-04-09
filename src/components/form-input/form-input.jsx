import React from "react";
import './form-input.styles.css'

const FormInput =({label,...otherProps})=>(
  <div className="inputs">
    <label htmlFor="inputs">{label}</label>
    <input {...otherProps} />
  </div>
);
export default FormInput