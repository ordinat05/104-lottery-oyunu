import React, { useState } from 'react'
import Lottery from './Lottery.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      <Lottery />
      <Lottery title="Çerez Şans" maxBalls={4} maxNum={20} />
    </div>
  )
}

export default App
