import { Outlet } from 'react-router-dom'

// STYLED COMPONENTS IMPORT
import { AppStyled } from './css/AppCSS'

// CONTEXT IMPORT
import { UsersContextProvider } from './context/UsersContext'

function App() {
  return (
    <UsersContextProvider>
      <AppStyled>
        <Outlet />
        
      </AppStyled>
    </UsersContextProvider>
  )
}

export default App
