import { Dropdown, Avatar } from '@heroui/react'
import { Icon } from '@iconify/react'

export function UserProfileDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div
          className='flex cursor-pointer items-center gap-2 bg-transparent'
          style={{ color: 'var(--color-text-primary)' }}
        >
          <Avatar>
            <Avatar.Image
              src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
              alt='User'
            />
          </Avatar>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Popover placement='top right'>
        <Dropdown.Menu className='px-0'>
          <Dropdown.Item
            id='user-info'
            textValue='User Info'
            className='hover:bg-transparent'
          >
            <div className='mx-auto flex flex-col items-center space-y-2'>
              <Avatar
                className='border'
                size='lg'
              >
                <Avatar.Image
                  src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
                  alt='User'
                />
              </Avatar>
              <p style={{ color: 'var(--color-text-primary)' }}>nhatvyhuynh304</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='shop-profile'
            textValue='Shop Profile'
            className='rounded-none'
          >
            <div className='flex gap-2' style={{ color: 'var(--color-text-primary)' }}>
              <Icon
                icon='lucide:user-circle'
                width='24'
                height='24'
                style={{ color: 'var(--color-brand-accent)' }}
              />
              Hồ sơ Shop
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='languages'
            textValue='Languages'
            className='rounded-none'
          >
            <div className='flex gap-2' style={{ color: 'var(--color-text-primary)' }}>
              <Icon
                icon='lucide:languages'
                width='24'
                height='24'
                style={{ color: 'var(--color-brand-accent)' }}
              />
              Languages
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='logout'
            textValue='Logout'
            className='rounded-none'
          >
            <div className='flex gap-2' style={{ color: 'var(--color-error)' }}>
              <Icon
                icon='lucide:log-out'
                width='24'
                height='24'
                style={{ color: 'var(--color-error)' }}
              />
              Đăng xuất
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
