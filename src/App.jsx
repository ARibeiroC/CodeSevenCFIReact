import { Outlet } from 'react-router-dom'

// STYLED COMPONENTS IMPORT
import { AppStyled } from './css/AppCSS'

// CONTEXT IMPORT
import { UsersContextProvider } from './context/UsersContext'


// HOOKs
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:35333"

function App() {
  
  const {data: users ,loading} = useFetch(`${import.meta.env.VITE_API_URL}/candidates`)

  return (
    <UsersContextProvider>
      <AppStyled>
        <Outlet />
      </AppStyled>
    </UsersContextProvider>
  )
}

export default App
