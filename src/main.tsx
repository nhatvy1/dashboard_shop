import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/product-form.css'
import Routes from './routes'
import { StrictMode } from 'react'
import { useThemeStore } from './shared/stores/theme-store'
import { useEffect } from 'react'

function ThemeInitializer() {
  const { theme } = useThemeStore()
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeInitializer />
    <Routes />
  </StrictMode>
)
