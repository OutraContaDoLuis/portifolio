import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router';

import HomePage from '../src/pages/HomePage.jsx';
import AboutPage from '../src/pages/AboutPage.jsx';
import ProjectsPage from '../src/pages/ProjectsPage.jsx';
import ContactPage from '../src/pages/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "projects",
        element: <ProjectsPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  } 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
