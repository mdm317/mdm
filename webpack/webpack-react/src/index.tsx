import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
console.log(document.getElementById('root'))
console.log(document.body)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
