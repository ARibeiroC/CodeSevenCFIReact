import { useState, useEffect } from 'react'
import './css/App.css'
import { FormSign } from './routes/FormSign'
import { Outlet } from 'react-router-dom'


const url = "http://localhost:35333"

function App() {

  return (
    <div className='App'>
      <Outlet />
    </div>
  )
}

export default App
