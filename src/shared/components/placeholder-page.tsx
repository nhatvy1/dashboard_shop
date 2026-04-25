import { useThemeStore } from '@/shared/stores/theme-store'
import { Icon } from '@iconify/react'

interface PlaceholderPageProps {
  title: string
  icon: string
}

export default function PlaceholderPage({ title, icon }: PlaceholderPageProps) {
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'

  return (
    <div
      className='flex h-full min-h-[calc(100vh-128px)] flex-col items-center justify-center rounded-lg p-6'
      style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}
    >
      <div
        className='flex size-16 items-center justify-center rounded-full'
        style={{ backgroundColor: 'var(--muted)' }}
      >
        <Icon icon={icon} className='h-8 w-8' style={{ color: 'var(--primary)' }} />
      </div>
      <h2 className='mt-4 text-xl font-semibold' style={{ color: 'var(--card-foreground)' }}>
        {title}
      </h2>
      <p className='mt-2 text-sm' style={{ color: 'var(--muted-foreground)' }}>
        Trang đang được phát triển
      </p>
    </div>
  )
}