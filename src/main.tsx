import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './routes'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
)
