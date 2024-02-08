import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Podcast from './components/Tabs/Podcast.jsx'
import Music from './components/Tabs/Music.jsx'
import Album from './components/Tabs/Album.jsx'
import Home from './components/Tabs/Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Podcast',
        element: <Podcast />
      },
      {
        path: '/Music',
        element: <Music />
      },
      {
        path: '/Album',
        element: <Album />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <RouterProvider router={router} />
  </ChakraProvider>
)
