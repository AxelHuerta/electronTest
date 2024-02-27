import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import Index from './routes/Index'
import Other from './routes/Other'

const router = createHashRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/other',
    element: <Other />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
