import { useState } from 'react'

import './App.css'

function App() {
  const time = new Date().toLocaleTimeString()
  const [count, setCount] = useState(0)

  return (
    <div>{time}

    </div>
     
  )
}

export default App
