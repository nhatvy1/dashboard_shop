import { Dropdown, Avatar } from '@heroui/react'
import { Icon } from '@iconify/react'

export function UserProfileDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div className='flex items-center gap-2 bg-transparent text-gray-500'>
          <Avatar>
            <Avatar.Image
              src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
              className=''
              alt='User'
              sizes=''
            />
          </Avatar>
          <span className='text-sm'>nhatvyhuynh304</span>
          <Icon icon='mingcute:down-line' className='h-4 w-4' />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Popover className='w-80 rounded-lg' placement='top right'>
        <Dropdown.Menu className='px-0 text-gray-500'>
          <Dropdown.Item
            id='new-file'
            textValue='New file'
            className='hover:bg-transparent'
          >
            <div className='mx-auto flex flex-col items-center space-y-2'>
              <Avatar className='border border-gray-600'>
                <Avatar.Image
                  src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
                  className=''
                  alt='User'
                />
              </Avatar>
              <p className='text-black'>nhatvyhuynh304</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='shop-profile'
            textValue='Shop Profile'
            className='rounded-none'
          >
            <div className='flex gap-2'>
              <Icon
                icon='material-symbols:supervised-user-circle-outline'
                width='24'
                height='24'
              />
              Hồ sơ Shop
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='languages'
            textValue='Languages'
            className='rounded-none'
          >
            <div className='flex gap-2'>
              <Icon icon='material-symbols:language' width='24' height='24' />
              Languages
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id='logout '
            textValue='Logout'
            className='rounded-none'
          >
            <div className='flex gap-2'>
              <Icon icon='material-symbols:logout' width='24' height='24' />
              Đăng xuất
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
