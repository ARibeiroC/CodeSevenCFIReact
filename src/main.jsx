// LIBS IMPORT
import { StrictMode } from 'react'  
import { createRoot} from 'react-dom/client'
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
import { Events } from './routes/Events.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <FormSign />
      },
      {
        path: `/area-do-candidato`,
        element: <Home />,
        children: [
          {
            path: `/area-do-candidato/:id`,
            element: <HomePage />
          },
          {
            path: `/area-do-candidato/:id/project-cfi`,
            element: <ProjectCfi />
          },
          {
            path: `/area-do-candidato/:id/events`,
            element: <Events />
          },
          {
            path: `/area-do-candidato/:id/test`,
            element: <DoTest />
          },
        ]
      },
      {
        path: `/confirm-register`,
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
      <RouterProvider router={router} />
  </StrictMode>,
)
