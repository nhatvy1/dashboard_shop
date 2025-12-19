import { Button, Popover } from '@heroui/react'
import { Icon } from '@iconify/react'

export default function Notifications() {
  return (
    <div className='relative'>
      <Popover>
        <Button isIconOnly className=''>
          <Icon icon='mingcute:notification-line' className='h-6 w-6' />
          <span className='absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs'>
            3
          </span>
        </Button>
        <Popover.Content className='w-100 rounded-lg' placement='top right'>
          <Popover.Dialog>
            <Popover.Heading>Thông báo </Popover.Heading>
            <p className='text-muted mt-2 text-sm'>Chưa có thông báo</p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  )
}
