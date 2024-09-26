import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Oppg143 from './components/oppg143'
import './components/app.css'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
