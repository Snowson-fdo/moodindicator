import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [color, setcolour] = useState("rgb(238, 241, 0)");
  const handleChange = (e) => {
    console.log(e.target.value)
    if (e.target.value == "Sad") {
      setcolour("rgb(19, 0, 164)")
    }
    if (e.target.value == "Happy") {
      setcolour("rgb(238, 241, 0)")
    }
    if (e.target.value == "Sleepy") {
      setcolour("rgb(35, 177, 0)")
    }
    if (e.target.value == "Excited") {
      setcolour("rgb(255, 0, 66)")
    }
  }
  return (
    <div id="main">
      <select onChange={handleChange}>
        <option>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id="mood-indicator" style={{ backgroundColor: `${color}` }}></div>
    </div>
  )
}


export default App;
