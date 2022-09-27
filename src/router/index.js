import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Error } from '../components/Error'
import { MainLayoutContainer } from '../components/MainLayout'
import { BlogLayoutContainer } from '../components/BlogLayout'
import { MainContainer } from '../containers/Main'
import { Contact } from '../components/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayoutContainer />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <MainContainer />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
        ],
      },
    ],
  },
  {
    path: 'blog',
    element: <BlogLayoutContainer />,
  },
])
