import { Button, Popover } from '@heroui/react'
import { Icon } from '@iconify/react'

export default function Notifications() {
  return (
    <div className='relative'>
      <Popover>
        <Button
          isIconOnly
          style={{
            backgroundColor: 'var(--heroui-secondary)',
            color: 'var(--heroui-secondary-foreground)',
          }}
        >
          <Icon icon='lucide:bell' className='h-6 w-6' />
          <span
            className='absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white'
            style={{ backgroundColor: 'var(--heroui-primary)' }}
          >
            3
          </span>
        </Button>
        <Popover.Content
          className='w-100 rounded-lg'
          placement='top right'
          style={{
            backgroundColor: 'var(--color-bg-elevated)',
            color: 'var(--color-text-primary)',
          }}
        >
          <Popover.Dialog>
            <Popover.Heading style={{ color: 'var(--color-text-primary)' }}>
              Thông báo
            </Popover.Heading>
            <p
              className='mt-2 text-sm'
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Chưa có thông báo
            </p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  )
}
