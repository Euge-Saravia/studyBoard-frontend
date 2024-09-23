import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
