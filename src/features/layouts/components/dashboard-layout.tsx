import { Outlet } from 'react-router'
import Header from './header'
import Sidebar from './sidebar'

export default function DashboardLayout() {
  return (
    <div
      className='flex h-dvh'
      style={{
        backgroundColor: 'var(--color-bg-base)',
        color: 'var(--color-text-primary)',
      }}
    >
      {/* Sidebar - Left Fixed */}
      <Sidebar />

      {/* Right Side - Header + Main Content */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Header - Top Right */}
        <Header />

        {/* Main Content */}
        <main className='flex-1 overflow-auto p-6 [&::-webkit-scrollbar]:w-0'>
          <div className='min-w-[1200px]'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
