import * as React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p onClick={() => setCount((count) => count + 1)}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
