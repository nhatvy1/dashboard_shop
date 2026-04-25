import { Outlet } from 'react-router'
import { useThemeStore } from '@/shared/stores/theme-store'
import Header from './header'
import Sidebar from './sidebar'

export default function DashboardLayout() {
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'

  return (
    <div
      className='flex h-dvh'
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      {/* Sidebar - Left Fixed */}
      <Sidebar />

      {/* Right Side - Header + Main Content */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Header - Top Right */}
        <Header />

        {/* Main Content */}
        <main className='flex-1 overflow-auto p-6'>
          <div className='min-w-[1200px]'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
