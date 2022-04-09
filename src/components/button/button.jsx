import React from "react";
import './button.styles.css'

const Button =({children,...otherProps})=>(
  <button {...otherProps} className='add-contact'>{children}</button>
)
export default Button