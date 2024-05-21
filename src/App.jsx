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
      <h2>Instructors:</h2>
      {instructors.map(inst => {
        return (
          <div key={inst.id}>
            {inst.id} - {inst.name}
          </div>
        )
      })}
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const NewInstructor = () => {
  const [name, setName] = useState('')

  const createInstructor = () => {
    axios.post('http://127.0.0.1:8000/instructors/', {
      name: name
    })
    .then(response => {
      console.log('RESPONSE: ', response)
      if (response.status === 200) {
        setName('')
        getInstructors()
      }
    })
    .catch(error => console.log('ERROR: ', error))
  }

  return (
    <div>
      <h2>Create a New Instructor:</h2>
      <input 
        onChange={e => setName(e.target.value)}
        placeholder='enter name'
        value={name}
      />
      <button onClick={() => createInstructor()}>
        Create Instructor:
      </button>
    </div>
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
      <NewInstructor getInstructors={getInstructors} />
    </div>
  )
}

export default App
