import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './UserContex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AdminProvider>
  </BrowserRouter>
)
