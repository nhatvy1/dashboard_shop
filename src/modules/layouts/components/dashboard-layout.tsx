import { Outlet } from 'react-router'
import Header from './header'
import Sidebar from './sidebar'

export default function DashboardLayout() {
  return (
    <div className='min-h-dvh bg-gray-50'>
      <Header />

      <div className='flex h-[calc(100vh-64px)]'>
        <Sidebar />

        <main className='flex-1 overflow-auto'>
          <div className='p-6'>
            <div className='min-w-[1200px]'>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
