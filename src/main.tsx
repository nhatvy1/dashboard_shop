import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/product-form.css'
import Routes from './routes'
import { StrictMode } from 'react'
import { useThemeStore } from './shared/stores/theme-store'
import { useEffect } from 'react'
import AppProvider from './cores/providers/app-provider'

function ThemeInitializer() {
  const { resolvedTheme } = useThemeStore()
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme)
    // Support Tailwind v4 color-scheme
    document.documentElement.style.colorScheme = resolvedTheme
  }, [resolvedTheme])
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <ThemeInitializer />
      <Routes />
    </AppProvider>
  </StrictMode>
)
