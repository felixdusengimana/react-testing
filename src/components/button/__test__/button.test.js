import React from "react"
import reactDom from "react-dom"
import Button from "../button"
import { isTSAnyKeyword } from "@babel/types"


it("Renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button label={"Click me please"} />, div)
})

