import React from "react"
import './App.css';
import Button from './components/button/button'
import {Counter} from "./components/counter/Counter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Click Me Please!" />
      </header>

      <div>
        <Counter defaultCount={10} description="WWW"/>
      </div>
    </div>
  );
}

export default App;
