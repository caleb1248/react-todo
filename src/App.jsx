import { useState } from 'react'
import reactLogo from './assets/react.svg';
import Todos from './lib/todos';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Todos />
    </div>
  )
}

export default App
