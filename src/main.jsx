import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider } from 'react-router-dom'
import './index.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Main from './Components/Main'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
   <Route path='home' element={<Welcome/>}/>
   <Route path='Main' element={<Main/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
