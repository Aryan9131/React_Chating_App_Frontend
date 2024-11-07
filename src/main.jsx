import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {UserContextProvider} from './Context/userContext.jsx'; // Import provider to provide conversations details 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>,
)
