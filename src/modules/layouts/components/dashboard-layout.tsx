import Header from './header'
import Sidebar from './sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='min-h-dvh bg-gray-50'>
      <Header />

      <div className='flex h-[calc(100vh-64px)]'>
        <Sidebar />

        <main className='flex-1 overflow-auto'>
          <div className='p-6 overflow-x-auto'>
            <div className='min-w-[1200px] md:min-w-0'>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
