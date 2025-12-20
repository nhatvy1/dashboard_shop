import { Icon } from '@iconify/react'
import { UserProfileDropdown } from './user-profile-dropdown'
import Notifications from './notifications'

export default function Header() {
  return (
    <header className='h-16 border-b border-b-gray-200'>
      <div className='flex items-center justify-between px-6 py-3'>
        <div className='flex items-center space-x-3'>
          <div className='flex items-center space-x-2 text-orange-500'>
            <Icon icon='simple-icons:ubuntu' className='h-8 w-8' />
            <span className='text-xl font-semibold'>MMO88</span>
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
