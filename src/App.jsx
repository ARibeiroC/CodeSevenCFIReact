import { useState, useEffect } from 'react'
import './App.css'
import { FormSign } from './routes/FormSign'
import { Outlet } from 'react-router-dom'


const url = "http://localhost:35333"

function App() {
  // const [candidates, setCandidates] = useState([])

  const handleSubmit= (e)=>{
    
  }

  useEffect(()=>{
    // async function getAllCandidates(){
    //   const res = await fetch(url+"/candidates")
    //   const data = await res.json()
    //   console.log(data)
    //   setCandidates(data)
    // }
    // getAllCandidates()
  }, [])

  return (
    <div className='App'>
      <Outlet />
    </div>
  )
}

export default App
