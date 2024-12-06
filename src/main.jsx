// LIBS IMPORT
import { StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

// COMPONENTS IMPORT
import { HomePage } from './routes/HomePage.jsx'
import App from './App.jsx'


// ROUTES IMPORT
import { FormSign } from './routes/FormSign.jsx'
import { ErrorPage } from './routes/ErrorPage.jsx'
import { Home } from './routes/Home.jsx'
import { ConfirmRegister } from './routes/ConfirmRegister.jsx'
import { ProjectCfi } from './routes/ProjectCfi.jsx'
import { DoTest } from './routes/DoTest.jsx'

// CONTEXT IMPORT
import { UserContextProvider } from './context/UserContext.jsx'

const raiz = '/'

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
        element: <Home />,
        children: [
          {
            path: `${raiz}/home`,
            element: <HomePage />
          },
          {
            path: `${raiz}/home/project-cfi`,
            element: <ProjectCfi />
          },
          {
            path: `${raiz}/home/test`,
            element: <DoTest />
          },
        ]
      },
      {
        path: `${raiz}/confirm-register`,
        element: <Home />
      },
      {
        path: `/ConfirmRegister`,
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
