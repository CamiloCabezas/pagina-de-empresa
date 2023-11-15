import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SaveUser from './components/save_carpet/Save'
import { Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/save' element={<SaveUser/>}/>
      </Routes>
    </div>
  )
}

export default App
