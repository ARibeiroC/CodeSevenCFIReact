import { StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { FormSign } from './routes/FormSign.jsx'
import { ErrorPage } from './routes/ErrorPage.jsx'
import { Home } from './routes/Home.jsx'

// CONTEXT IMPORT
import { UserContextProvider } from './context/UserContext.jsx'
import { ConfirmRegister } from './routes/ConfirmRegister.jsx'

const raiz = '/CodeSevenCFIReact'

const router = createBrowserRouter([
  {
    path: raiz,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: raiz,
        element: <FormSign />
      },
      {
        path: `${raiz}/home`,
        element: <Home />
      },
      {
        path: `${raiz}/ConfirmRegister`,
        element: <ConfirmRegister />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)
