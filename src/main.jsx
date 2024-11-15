import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { FormSign } from './routes/FormSign.jsx'
import { ErrorPage } from './routes/ErrorPage.jsx'
import { Home } from './routes/Home.jsx'

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
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
