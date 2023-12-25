import React,{useState} from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Notfound from "./components/Notfound/Notfound.jsx"
import Page from './components/Page/Page.jsx'




export default function App() {







// eslint-disable-next-line no-undef




let routers=createBrowserRouter([
  {index:true,element:<Page/>},
      {path:"*",element: <Notfound/>}
])


  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  </>
}
