import React from "react"
import './App.css';
import Button from './components/button/button'
import {Counter} from "./components/counter/Counter"
import PhotosList from "./components/photolist/PhotosList";

function App() {
  return (
    <div className="App">
      <h1>Button</h1>
        <Button label="Click Me Please!" />

      <div>
        <Counter defaultCount={10} description="WWW"/>
      </div>

      <div>
        <PhotosList/>
      </div>
    </div>
  );
}

export default App;
