import { Outlet } from 'react-router-dom'

// STYLED COMPONENTS IMPORT
import { AppStyled } from './css/AppCSS'


const url = "http://localhost:35333"

function App() {
  
  return (
    <AppStyled>
      <Outlet />
    </AppStyled>
  )
}

export default App
