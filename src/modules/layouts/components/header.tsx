import { UserProfileDropdown } from './user-profile-dropdown'
import Notifications from './notifications'

export default function Header() {
  return (
    <header className='h-16 border-b border-b-gray-200'>
      <div className='flex items-center justify-between px-6 py-3'>
        <div className='flex items-center space-x-3'>
          <div className='flex size-7 items-center justify-center rounded-sm bg-orange-500 text-white'>
            <span className='text-lg font-semibold'>M</span>
          </div>
          <span className='text-lg'>Kênh Người Bán</span>
        </div>

        <div className='flex items-center space-x-4'>
          <Notifications />

          <UserProfileDropdown />
        </div>
      </div>
    </header>
  )
}
