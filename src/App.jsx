import React, { useState } from "react";
import "./App.css"
import Card from "./components/card.jsx"

export default function App() {
  
  return (
    <div className="App">
      <Card value = {10} array = {[1,2,3]}/>
    </div>
  )
}



