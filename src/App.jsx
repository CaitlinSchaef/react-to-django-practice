import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {

  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    getInstructors()
  }, [])

  const getInstructors = () => {
    axios.get('http://127.0.0.1:8000/instructors/')
  }

  return (
    <div className="p-5">

    </div>
  )
}

export default App
