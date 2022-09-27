import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ContextProvider } from './context'
import './assets/fonts/fonts.css'
import './app.scss'

export default function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}
