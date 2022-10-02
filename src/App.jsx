import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Counter App</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>Click on the above button to increase counter by 1</p>
    </div>
  )
}

export default App
