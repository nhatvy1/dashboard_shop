import { Dropdown, Avatar } from '@heroui/react'
import { Icon } from '@iconify/react'

export function UserProfileDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div className='flex items-center gap-2 bg-transparent cursor-pointer' style={{ color: 'var(--foreground)' }}>
          <Avatar>
            <Avatar.Image
              src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
              className=''
              alt='User'
              sizes=''
            />
          </Avatar>
          <span className='text-sm'>nhatvyhuynh304</span>
          <Icon icon='lucide:chevron-down' className='h-4 w-4' style={{ color: 'var(--muted-foreground)' }} />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Popover className='w-80 rounded-lg' placement='top right' style={{ backgroundColor: 'var(--card)' }}>
        <Dropdown.Menu className='px-0' style={{ color: 'var(--card-foreground)' }}>
          <Dropdown.Item
            id='new-file'
            textValue='New file'
            className='hover:bg-transparent'
          >
            <div className='mx-auto flex flex-col items-center space-y-2'>
              <Avatar className='border' style={{ borderColor: 'var(--border)' }}>
                <Avatar.Image
                  src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
                  className=''
                  alt='User'
                />
              </Avatar>
              <p style={{ color: 'var(--card-foreground)' }}>nhatvyhuynh304</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='shop-profile'
            textValue='Shop Profile'
            className='rounded-none'
          >
            <div className='flex gap-2' style={{ color: 'var(--foreground)' }}>
              <Icon icon='lucide:user-circle' width='24' height='24' style={{ color: 'var(--primary)' }} />
              Hồ sơ Shop
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='languages'
            textValue='Languages'
            className='rounded-none'
          >
            <div className='flex gap-2' style={{ color: 'var(--foreground)' }}>
              <Icon icon='lucide:languages' width='24' height='24' style={{ color: 'var(--primary)' }} />
              Languages
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='logout'
            textValue='Logout'
            className='rounded-none'
          >
            <div className='flex gap-2' style={{ color: 'var(--foreground)' }}>
              <Icon icon='lucide:log-out' width='24' height='24' style={{ color: 'var(--primary)' }} />
              Đăng xuất
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}