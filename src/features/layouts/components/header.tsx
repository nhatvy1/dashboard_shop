import { UserProfileDropdown } from './user-profile-dropdown'
import Notifications from './notifications'
import { Icon } from '@iconify/react'
import { useThemeStore } from '@/shared/stores/theme-store'

export default function Header() {
  const { theme, toggleTheme } = useThemeStore()
  const isDark = theme === 'dark'

  return (
    <header
      className='flex h-16 items-center justify-between border-b px-6'
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
    >
      <div className='flex items-center space-x-3'>
        {/* Empty - logo moved to sidebar */}
      </div>

      <div className='flex items-center space-x-4'>
        <button
          onClick={toggleTheme}
          className='rounded-md p-2 transition-colors'
          style={{ color: 'var(--muted-foreground)' }}
        >
          <Icon icon={isDark ? 'lucide:sun' : 'lucide:moon'} className='h-5 w-5' />
        </button>

        <Notifications />

        <UserProfileDropdown />
      </div>
    </header>
  )
}