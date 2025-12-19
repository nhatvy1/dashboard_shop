import { useState } from 'react'
import { Icon } from '@iconify/react'

interface MenuItem {
  label: string
  icon: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Quản Lý Đơn Hàng',
    icon: 'mingcute:shopping-bag-1-line',
    children: [
      { label: 'Tất Cả', icon: 'mingcute:grid-line' },
      {
        label: 'Đơn Trả hàng /Hoàn tiền hoặc hủy đơn ',
        icon: 'mingcute:add-line'
      }
    ]
  },
  {
    label: 'Quản Lý Sản Phẩm',
    icon: 'mingcute:box-3-line',
    children: [
      { label: 'Tất Cả Sản Phẩm', icon: 'mingcute:grid-line' },
      { label: 'Thêm Sản Phẩm', icon: 'mingcute:add-line' }
    ]
  },
  {
    label: 'Kênh Marketing',
    icon: 'tabler:tag'
  },
  {
    label: 'Chăm sóc khách hàng',
    icon: 'mingcute:service-line',
    children: [
      { label: 'Tin nhắn', icon: 'mingcute:chat-1-line' },
      { label: 'Đánh giá', icon: 'material-symbols:star-rate' }
    ]
  },
  {
    label: 'Tài Chính',
    icon: 'mingcute:wallet-4-line',
    children: [
      {
        label: 'Doanh thu',
        icon: 'mingcute:coin-line'
      },
      {
        label: 'Số dư',
        icon: 'mingcute:wallet-3-line'
      },
      {
        label: 'Tài kkhoản ngân hàng',
        icon: 'mingcute:bank-line'
      }
    ]
  },
  {
    label: 'Dữ Liệu',
    icon: 'mingcute:chart-bar-line',
    children: [
      {
        label: 'Phân tích hành vi',
        icon: 'mingcute:coin-line'
      },
      {
        label: 'Hiệu quả bán hàng',
        icon: 'mingcute:wallet-3-line'
      }
    ]
  },
  {
    label: 'Quản lý shop',
    icon: 'mingcute:store-2-line',
    children: [
      {
        label: 'Hồ sơ ',
        icon: 'mingcute:user-3-line'
      },
      {
        label: 'Thiết lập Shop',
        icon: 'material-symbols-light:settings-cinematic-blur-outline'
      }
    ]
  },
  {
    label: 'Quản lý người dùng',
    icon: 'mingcute:user-3-line'
  }
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  return (
    <aside className='h-full w-64 border-r border-gray-200 bg-white'>
      <nav className=''>
        <ul className='space-y-2'>
          {menuItems.map((item) => (
            <li key={item.label}>
              <div
                className={`flex cursor-pointer items-center justify-between rounded-md p-3 transition-colors hover:bg-gray-50 ${
                  item.children ? 'text-gray-700' : 'text-gray-600'
                }`}
                onClick={() => item.children && toggleExpanded(item.label)}
              >
                <div className='flex items-center space-x-3'>
                  <Icon icon={item.icon} className='h-5 w-5 text-gray-500' />
                  <span className='text-sm font-medium'>{item.label}</span>
                </div>
                {item.children && (
                  <Icon
                    icon={
                      expandedItems.includes(item.label)
                        ? 'mingcute:up-line'
                        : 'mingcute:down-line'
                    }
                    className='h-4 w-4 text-gray-400'
                  />
                )}
              </div>

              {item.children && expandedItems.includes(item.label) && (
                <ul className='mt-2 ml-4 space-y-1'>
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <div className='flex cursor-pointer items-center space-x-3 rounded-md p-2 transition-colors hover:bg-gray-50'>
                        <Icon
                          icon={child.icon}
                          className='h-4 w-4 text-gray-400'
                        />
                        <span className='text-sm text-gray-600'>
                          {child.label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
