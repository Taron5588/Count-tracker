import React, { useState } from "react";
import "./App.css"

export default function App() {

 const array = [1,2,3,4,5,6]


  return (
    <div className="App">
        {array.map((item, idx) => {
          return <div key={idx}>
            <h1>{item}</h1>
            <button>X</button>
            </div>
        })}
    </div>
  )
}



