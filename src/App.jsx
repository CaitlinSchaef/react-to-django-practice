import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

//made a ternary inside of this
const InstructorsList = ({instructors}) => {
  return instructors.length > 0 ? (
    <div>
      YES IT IS GREATER THAN 0
    </div>
  ) : (
    <div>Loading...</div>
  )
}

function App() {

  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    getInstructors()
  }, [])

  // #the then is paired to the get
  const getInstructors = () => {
    axios.get('http://127.0.0.1:8000/instructors/')
    .then(response => {
      setInstructors(response.data)
    })
    .catch(error => console.log('ERROR: ', error))
  }

  return (
    <div className="p-5">
      <Title />
      <InstructorsList instructors={instructors} />
    </div>
  )
}

export default App
