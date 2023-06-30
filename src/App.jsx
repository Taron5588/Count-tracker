import React, { useState } from "react";
import "./App.css"
import Card from "./components/card.jsx"

export default function App() {

  const limit = 20

  return (
    <div className="App">
      <Card value={limit}/>
    </div>
  )
}



