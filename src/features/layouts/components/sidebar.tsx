import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router'
import { useThemeStore } from '@/shared/stores/theme-store'

interface MenuItem {
  label: string
  icon: string
  path?: string
}

const ROUTES = {
  HOME: '/',
  USERS: '/users',
  ROLES: '/roles',
  ARTICLES: '/articles',
  SERIES: '/series',
  CATEGORIES: '/categories',
  COUNTRIES: '/countries',
  IMAGES: '/images',
  BLOG_POSTS: '/blog-posts',
  DIRECTORS: '/directors',
  KKPHIM_SYNC: '/kkphim-sync',
  OPHIM_SYNC: '/ophim-sync',
  KKMOVIES: '/kkmovies',
  PAGES: '/pages',
  MENUS: '/menus',
  BRANDS: '/brands',
  SIDEBAR: '/sidebar-config',
  TRENDING_MOVIES: '/trending-movies',
  COMMENTS: '/comments',
  ROBOT_TXT: '/robot-txt',
  REDIRECTIONS: '/redirections',
  INFORMATION: '/information',
  AI_CONFIG: '/ai-config',
  SETTINGS: '/settings',
}

const menuSections: { title: string; items: MenuItem[] }[] = [
  {
    title: 'Tổng quan',
    items: [
      { label: 'Dashboard', icon: 'lucide:home', path: ROUTES.HOME },
    ],
  },
  {
    title: 'Quản lý người dùng',
    items: [
      { label: 'Người dùng', icon: 'lucide:users', path: ROUTES.USERS },
      { label: 'Vai trò', icon: 'lucide:shield', path: ROUTES.ROLES },
    ],
  },
  {
    title: 'Nội dung',
    items: [
      { label: 'Danh sách phim', icon: 'lucide:film', path: ROUTES.ARTICLES },
      { label: 'Phim bộ', icon: 'lucide:list-checks', path: ROUTES.SERIES },
      { label: 'Hình ảnh', icon: 'lucide:image', path: ROUTES.IMAGES },
      { label: 'Blog Post', icon: 'lucide:book-open', path: ROUTES.BLOG_POSTS },
      { label: 'Danh mục', icon: 'lucide:folder-open', path: ROUTES.CATEGORIES },
      { label: 'Quốc gia', icon: 'lucide:folder-open', path: ROUTES.COUNTRIES },
       { label: 'Đạo diễn', icon: 'lucide:user-check', path: ROUTES.DIRECTORS },
    ],
  },
  {
    title: 'Đồng bộ dữ liệu',
    items: [
      { label: 'KKPhim Sync', icon: 'lucide:refresh-cw', path: ROUTES.KKPHIM_SYNC },
      { label: 'OPhim Sync', icon: 'lucide:refresh-cw', path: ROUTES.OPHIM_SYNC },
      { label: 'KKMovie', icon: 'lucide:video', path: ROUTES.KKMOVIES },
    ],
  },
  {
    title: 'Giao diện',
    items: [
      { label: 'Trang', icon: 'lucide:layout', path: ROUTES.PAGES },
      { label: 'Menu', icon: 'lucide:menu', path: ROUTES.MENUS },
      { label: 'Brand', icon: 'lucide:link', path: ROUTES.BRANDS },
      { label: 'Sidebar', icon: 'lucide:panel-left', path: ROUTES.SIDEBAR },
      { label: 'Phim Thịnh Hành', icon: 'lucide:trending-up', path: ROUTES.TRENDING_MOVIES },
    ],
  },
  {
    title: 'Tương tác',
    items: [
      { label: 'Bình luận', icon: 'lucide:message-square', path: ROUTES.COMMENTS },
    ],
  },
  {
    title: 'Hệ thống & công cụ',
    items: [
      { label: 'Robot.txt', icon: 'lucide:bot', path: ROUTES.ROBOT_TXT },
      { label: 'Chuyển hướng', icon: 'lucide:monitor', path: ROUTES.REDIRECTIONS },
      { label: 'Quản lý thông tin', icon: 'lucide:info', path: ROUTES.INFORMATION },
      { label: 'Cấu hình AI', icon: 'lucide:sparkles', path: ROUTES.AI_CONFIG },
      { label: 'Cài đặt', icon: 'lucide:settings', path: ROUTES.SETTINGS },
    ],
  },
]

export default function Sidebar() {
  const { sidebarCollapsed, toggleSidebar } = useThemeStore()
  const location = useLocation()

  const isActive = (path?: string) => {
    if (!path) return false
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <aside
      className={`relative flex h-dvh shrink-0 flex-col border-r transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}
      style={{
        backgroundColor: 'var(--color-sidebar)',
        borderColor: 'var(--color-border-base)',
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className='absolute -right-3 top-17 z-10 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm transition-colors'
        style={{
          backgroundColor: 'var(--color-sidebar)',
          borderColor: 'var(--color-border-base)',
        }}
      >
        <Icon
          icon={sidebarCollapsed ? 'lucide:chevron-right' : 'lucide:chevron-left'}
          className='h-3 w-3'
          style={{ color: 'var(--color-text-secondary)' }}
        />
      </button>

      {/* Logo Section */}
      <div
        className={`flex h-16 items-center border-b ${sidebarCollapsed ? 'justify-center px-2' : 'px-4'}`}
        style={{ borderColor: 'var(--color-border-base)' }}
      >
        <div
          className='flex size-7 items-center justify-center rounded-sm text-white'
          style={{ backgroundColor: 'var(--color-brand-secondary)' }}
        >
          <span className='text-lg font-semibold'>M</span>
        </div>
        {!sidebarCollapsed && (
          <span className='ml-2 text-base font-medium' style={{ color: 'var(--color-text-primary)' }}>
            Dashboard
          </span>
        )}
      </div>

      <nav className='flex-1 overflow-y-auto py-3 scrollbar-hide'>
        {menuSections.map((section) => (
          <div key={section.title} className='mb-3'>
            {!sidebarCollapsed && (
              <div
                className='px-4 py-1.5 text-xs font-medium tracking-wide'
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {section.title}
              </div>
            )}
            <ul className={`space-y-0.5 ${sidebarCollapsed ? 'px-1' : 'px-2'}`}>
              {section.items.map((item) => {
                const active = isActive(item.path)
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path || '/'}
                      className={`flex items-center rounded-md transition-all ${sidebarCollapsed ? 'justify-center p-2.5' : 'px-3 py-2'}`}
                      style={{
                        backgroundColor: active ? 'var(--color-sidebar-active)' : 'transparent',
                        color: active ? 'var(--color-sidebar-text-active)' : 'var(--color-sidebar-text)',
                        borderLeft: active && !sidebarCollapsed ? '3px solid var(--color-brand-secondary)' : '3px solid transparent',
                      }}
                    >
                      <Icon
                        icon={item.icon}
                        className={`h-[18px] w-[18px] shrink-0 ${sidebarCollapsed ? '' : 'mr-2.5'}`}
                        style={{ color: active ? 'var(--color-sidebar-text-active)' : 'var(--color-sidebar-text)' }}
                      />
                      {!sidebarCollapsed && (
                        <span className='text-sm font-normal'>{item.label}</span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </aside>
  )
}
