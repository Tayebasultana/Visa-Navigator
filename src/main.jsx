import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}></AuthProvider>
    </div>
  </StrictMode>,
)
