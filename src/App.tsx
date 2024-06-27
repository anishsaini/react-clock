import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(new Date().toLocaleTimeString())

    const updateTime = () => {
    setCount(new Date().toLocaleTimeString())
  }
  setInterval(updateTime, 1000)

  return (
    <div>
      {count}
      
    </div>
  )
}

export default App
