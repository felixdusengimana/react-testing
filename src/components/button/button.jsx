import React from "react"
import "./button.css"

const Button = ({ label }) => {
  return <button data-testid="button" className="button-style" onClick={()=>alert("Hi")}>{label}</button>
}

export default Button