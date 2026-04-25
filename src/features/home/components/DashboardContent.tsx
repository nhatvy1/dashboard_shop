import { Button, Card } from '@heroui/react'
import { Icon } from '@iconify/react'
import { useThemeStore } from '@/shared/stores/theme-store'

/* ===== STAT CARD WITH ACCENT BAR ===== */
interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: 'up' | 'down' | 'neutral'
  color?: 'default' | 'primary' | 'warning' | 'success'
  accentColor?: 'blue' | 'green' | 'purple' | 'amber'
}

function StatCard({
  title,
  value,
  subtitle,
  trend = 'neutral',
  color = 'default',
  accentColor = 'blue'
}: StatCardProps) {
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'

  const colorStyles = {
    default: {
      bg: isDark ? 'var(--card)' : '#ffffff',
      border: 'var(--border)',
      iconBg: isDark ? 'var(--muted)' : '#f1f5f9',
    },
    primary: {
      bg: isDark ? 'rgba(59, 130, 246, 0.1)' : '#eff6ff',
      border: isDark ? 'rgba(59, 130, 246, 0.3)' : '#bfdbfe',
      iconBg: isDark ? 'rgba(59, 130, 246, 0.2)' : '#dbeafe',
    },
    warning: {
      bg: isDark ? 'rgba(245, 158, 11, 0.1)' : '#fffbeb',
      border: isDark ? 'rgba(245, 158, 11, 0.3)' : '#fde68a',
      iconBg: isDark ? 'rgba(245, 158, 11, 0.2)' : '#fef3c7',
    },
    success: {
      bg: isDark ? 'rgba(34, 197, 94, 0.1)' : '#f0fdf4',
      border: isDark ? 'rgba(34, 197, 94, 0.3)' : '#bbf7d0',
      iconBg: isDark ? 'rgba(34, 197, 94, 0.2)' : '#dcfce7',
    },
  }

  const style = colorStyles[color]

  return (
    <Card
      className='card-hover relative overflow-hidden border'
      style={{
        backgroundColor: style.bg,
        borderColor: style.border,
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Accent bar */}
      <div className={`stat-accent-bar ${accentColor}`} />

      <Card.Content className='p-5'>
        <div className='text-center'>
          <h3
            className='text-2xl font-semibold'
            style={{ color: 'var(--card-foreground)' }}
          >
            {value}
          </h3>
          <p
            className='mt-1.5 text-sm'
            style={{ color: 'var(--muted-foreground)' }}
          >
            {title}
          </p>
          {subtitle && (
            <p
              className={`mt-1 text-xs font-medium ${
                trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-500' : ''
              }`}
              style={{ color: trend === 'up' ? 'var(--accent)' : trend === 'down' ? '#ef4444' : 'var(--muted-foreground)' }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </Card.Content>
    </Card>
  )
}

/* ===== BAR CHART COMPONENT ===== */
function BarChart({
  data,
  labels
}: {
  data: number[]
  labels: string[]
}) {
  const maxVal = Math.max(...data)

  return (
    <div className='flex items-end justify-between gap-2 h-24'>
      {data.map((val, i) => {
        const heightPct = (val / maxVal) * 100
        return (
          <div key={i} className='flex flex-col items-center gap-1.5 flex-1'>
            <div
              className='dash-bar w-full'
              style={{
                height: `${heightPct}%`,
                animationDelay: `${i * 0.05}s`
              }}
            />
            <span
              className='text-xs'
              style={{ color: 'var(--muted-foreground)' }}
            >
              {labels[i]}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function ActionCard({
  title,
  description,
  icon,
  iconBg,
  iconColor
}: {
  title: string
  description: string
  icon: string
  iconBg: string
  iconColor: string
}) {
  return (
    <Card className='card-hover cursor-pointer border' style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <Card.Content className='p-4'>
        <div className='flex items-start space-x-3'>
          <div
            className='rounded-lg p-2.5'
            style={{ backgroundColor: iconBg }}
          >
            <Icon icon={icon} className='h-5 w-5' style={{ color: iconColor }} />
          </div>
          <div className='flex-1'>
            <h4
              className='text-sm font-medium'
              style={{ color: 'var(--card-foreground)' }}
            >
              {title}
            </h4>
            <p
              className='mt-1 text-xs leading-relaxed'
              style={{ color: 'var(--muted-foreground)' }}
            >
              {description}
            </p>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
}

export default function DashboardContent() {
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'

  return (
    <div className='relative'>
      <div className='dash-grid-bg' />
      <div className='dash-sq' />
      <div className='dash-sq' />
      <div className='dash-sq' />
      <div className='dash-sq' />
      <div className='dash-sq' />
      <div className='dash-sq' />
      <div className='dash-orb dash-orb-1' />
      <div className='dash-orb dash-orb-2' />
      <div className='dash-orb dash-orb-3' />

      <div className='relative z-10'>
      <div
        className='rounded-xl'
        
      >
        <div className='space-y-8'>
        <div className='mb-5 flex items-center justify-between'>
          <h2
            className='text-lg font-semibold'
            style={{ color: 'var(--card-foreground)' }}
          >
            Danh sách cần làm
          </h2>
          <Button
            variant='secondary'
            size='sm'
            className='text-primary'
          >
            Xem thêm
            <Icon icon='lucide:arrow-right' className='ml-1 h-4 w-4' />
          </Button>
        </div>

        <div className='mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4'>
          <StatCard title='Chờ Lấy Hàng' value='0' color='warning' accentColor='amber' />
          <StatCard title='Đã Xử Lý' value='0' color='success' accentColor='green' />
          <StatCard title='Đơn Trả/Hoàn/Hủy' value='0' color='primary' accentColor='blue' />
          <StatCard title='Sản Phẩm Bị Tạm Khóa' value='0' color='default' accentColor='purple' />
        </div>
      </div>

      {/* Sales Analytics Section */}
      <div>
        <div className='mb-5 flex items-center justify-between'>
          <h2
            className='text-lg font-semibold'
            style={{ color: 'var(--card-foreground)' }}
          >
            Phân Tích Bán Hàng
          </h2>
          <div className='flex items-center space-x-3'>
            <span
              className='text-xs'
              style={{ color: 'var(--muted-foreground)' }}
            >
              Hôm nay
            </span>
            <Button variant='secondary' size='sm' className='text-primary'>
              Xem thêm
              <Icon icon='lucide:arrow-right' className='ml-1 h-4 w-4' />
            </Button>
          </div>
        </div>

        <div className='mb-6 grid grid-cols-2 gap-4 lg:grid-cols-5'>
          <StatCard title='Doanh số' value='₫0' subtitle='↗ 0,00%' trend='up' color='primary' accentColor='blue' />
          <StatCard title='Lượt truy cập' value='0' subtitle='↗ 0,00%' trend='up' color='primary' accentColor='green' />
          <StatCard title='Product Clicks' value='0' subtitle='↘ 0,00%' trend='down' color='primary' accentColor='purple' />
          <StatCard title='Đơn hàng' value='0' subtitle='↗ 0,00%' trend='up' color='primary' accentColor='amber' />
          <StatCard title='Order Conversion' value='0,00%' subtitle='↗ 0,00%' trend='up' color='primary' accentColor='blue' />
        </div>
      </div>

      {/* Performance Section */}
      <div>
        <div className='mb-5 flex items-center justify-between'>
          <h2
            className='text-lg font-semibold'
            style={{ color: 'var(--card-foreground)' }}
          >
            Hiệu quả bán hàng
          </h2>
          <Button variant='secondary' size='sm' className='text-primary'>
            Xem thêm
            <Icon icon='lucide:arrow-right' className='ml-1 h-4 w-4' />
          </Button>
        </div>

        <Card
          className='card-hover mb-6 border'
          style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
        >
          <Card.Content className='p-5'>
            <div className='flex items-center space-x-4'>
              <div
                className='flex size-12 items-center justify-center rounded-xl'
                style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
              >
                <Icon
                  icon='lucide:calendar-check'
                  className='h-6 w-6'
                  style={{ color: '#f59e0b' }}
                />
              </div>
              <div className='flex-1'>
                <p
                  className='text-sm font-medium'
                  style={{ color: 'var(--card-foreground)' }}
                >
                  Xuất sắc
                </p>
                <p
                  className='text-xs'
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Tất cả chỉ số đều tốt
                </p>
              </div>
              <div
                className='rounded-full px-3 py-1 text-xs font-medium'
                style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--accent)' }}
              >
                Tốt
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Two column layout */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {/* Shopee Services */}
        <div>
          <div className='mb-5 flex items-center justify-between'>
            <h2
              className='text-lg font-semibold'
              style={{ color: 'var(--card-foreground)' }}
            >
              Dịch vụ Shopee
            </h2>
            <Button variant='secondary' size='sm' className='text-primary'>
              Xem thêm
              <Icon icon='lucide:arrow-right' className='ml-1 h-4 w-4' />
            </Button>
          </div>

          <Card
            className='card-hover border'
            style={{
              borderColor: 'rgba(245, 158, 11, 0.3)',
              backgroundColor: isDark ? 'rgba(245, 158, 11, 0.05)' : 'rgba(245, 158, 11, 0.03)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Card.Content className='p-5'>
              <div className='flex items-start space-x-4'>
                <div
                  className='flex size-12 items-center justify-center rounded-xl'
                  style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)' }}
                >
                  <Icon
                    icon='lucide:megaphone'
                    className='h-6 w-6'
                    style={{ color: '#f59e0b' }}
                  />
                </div>
                <div className='flex-1'>
                  <h3
                    className='mb-2 font-medium'
                    style={{ color: 'var(--card-foreground)' }}
                  >
                    Tăng doanh số với Dịch vụ Hiển thị Shopee!
                  </h3>
                  <p
                    className='mb-4 text-sm leading-relaxed'
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Tìm hiểu thêm về Dịch vụ Hiển thị Shopee để tạo chiến dịch hiệu quả.
                  </p>
                  <Button
                size='sm'
                    className='text-white'
                    style={{ backgroundColor: '#f59e0b' }}
                  >
                    Tìm hiểu thêm
                  </Button>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Notable Updates */}
        <div>
          <div className='mb-5 flex items-center justify-between'>
            <h2
              className='text-lg font-semibold'
              style={{ color: 'var(--card-foreground)' }}
            >
              Tin Nổi Bật
            </h2>
            <Button variant='secondary' size='sm' className='text-primary'>
              Xem thêm
              <Icon icon='lucide:arrow-right' className='ml-1 h-4 w-4' />
            </Button>
          </div>

          <Card className='card-hover border' style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <Card.Content className='p-4'>
              <div className='space-y-3'>
                <ActionCard
                  title='Shopee cập nhật lịch Tết Dương lịch 2026'
                  description='Lịch làm việc, rút tiền và CSKH dịp Tết Dương lịch. Xem ngay.'
                  icon='lucide:calendar'
                  iconBg={isDark ? 'rgba(239, 68, 68, 0.2)' : '#fef2f2'}
                  iconColor='#ef4444'
                />

                <ActionCard
                  title='Tối Ưu Giá Thầu Khuyến Mãi'
                  description='Tăng lực hiển thị với Tối Ưu Giá Thầu - hỗ trợ tới 4x.'
                  icon='lucide:target'
                  iconBg={isDark ? 'rgba(245, 158, 11, 0.2)' : '#fffbeb'}
                  iconColor='#f59e0b'
                />
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>

      {/* Bottom sections */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {/* KOL Orders */}
        <div>
          <div className='mb-5 flex items-center justify-between'>
            <h2
              className='text-lg font-semibold'
              style={{ color: 'var(--card-foreground)' }}
            >
              Tăng đơn cùng KOL
            </h2>
            <Button variant='secondary' size='sm' className='text-primary'>
              Thêm
              <Icon icon='lucide:plus' className='ml-1 h-4 w-4' />
            </Button>
          </div>

          <Card
            className='card-hover border'
            style={{
              borderColor: 'rgba(239, 68, 68, 0.2)',
              backgroundColor: isDark ? 'rgba(239, 68, 68, 0.05)' : '#fef2f2',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Card.Content className='p-6'>
              <div className='text-center'>
                <div
                  className='mx-auto mb-4 flex size-16 items-center justify-center rounded-full'
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                >
                  <Icon
                    icon='lucide:trophy'
                    className='h-8 w-8'
                    style={{ color: '#ef4444' }}
                  />
                </div>
                <h3
                  className='mb-2 font-medium'
                  style={{ color: 'var(--card-foreground)' }}
                >
                  Chi trả cho đơn hàng KOL thành công!
                </h3>
                <p
                  className='text-sm'
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Hợp tác với KOL để tăng đơn hàng
                </p>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Livestream */}
        <div>
          <div className='mb-5 flex items-center justify-between'>
            <h2
              className='text-lg font-semibold'
              style={{ color: 'var(--card-foreground)' }}
            >
              Livestream
            </h2>
            <Button variant='secondary' size='sm' className='text-primary'>
              Xem thêm
              <Icon icon='lucide:arrow-right' className='ml-1 h-4 w-4' />
            </Button>
          </div>

          <Card className='card-hover border' style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <Card.Content className='p-5'>
              <h3
                className='mb-4 font-medium'
                style={{ color: 'var(--card-foreground)' }}
              >
                Bắt đầu Livestream ngay
              </h3>
              <div className='space-y-3'>
                {[
                  { label: 'Chuẩn bị nội dung', status: 'complete' },
                  { label: 'Thiết lập thiết bị', status: 'pending' },
                  { label: 'Bắt đầu phát', status: 'pending' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between'
                  >
                    <span
                      className='text-sm'
                      style={{ color: 'var(--foreground)' }}
                    >
                      {item.label}
                    </span>
                    <Icon
                      icon={
                        item.status === 'complete'
                          ? 'lucide:check-circle'
                          : 'lucide:clock'
                      }
                      className='h-5 w-5'
                      style={{
                        color:
                          item.status === 'complete'
                            ? 'var(--accent)'
                            : 'var(--muted-foreground)',
                      }}
                    />
                  </div>
                ))}
              </div>
              <Button
                className='mt-4 w-full bg-primary text-primary-foreground'
                style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                Bắt đầu Livestream
              </Button>
            </Card.Content>
          </Card>
        </div>
      </div>

      {/* Task Management Section */}
      <div>
        <div className='mb-5 flex items-center justify-between'>
          <h2
            className='text-lg font-semibold'
            style={{ color: 'var(--card-foreground)' }}
          >
            Nhiệm Vụ Người Bán
          </h2>
          <Button variant='secondary' size='sm' className='text-primary'>
            Xem thêm
            <Icon icon='lucide:arrow-right' className='ml-1 h-4 w-4' />
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <ActionCard
            title='Hoàn thành hồ sơ Shop'
            description='Cung cấp đầy đủ thông tin để tăng độ tin cậy'
            icon='lucide:store'
            iconBg={isDark ? 'rgba(59, 130, 246, 0.2)' : '#eff6ff'}
            iconColor='var(--primary)'
          />

          <ActionCard
            title='Thêm sản phẩm đầu tiên'
            description='Bắt đầu bán hàng bằng cách thêm sản phẩm'
            icon='lucide:plus-circle'
            iconBg={isDark ? 'rgba(34, 197, 94, 0.2)' : '#f0fdf4'}
            iconColor='var(--accent)'
          />

          <ActionCard
            title='Thiết lập vận chuyển'
            description='Cấu hình phương thức và phí vận chuyển'
            icon='lucide:truck'
            iconBg={isDark ? 'rgba(168, 85, 247, 0.2)' : '#faf5ff'}
            iconColor='#a855f7'
          />
        </div>
      </div>

      {/* Revenue Chart Section */}
      <div>
        <div className='mb-5 flex items-center justify-between'>
          <h2
            className='text-lg font-semibold'
            style={{ color: 'var(--card-foreground)' }}
          >
            Doanh thu — 7 ngày gần đây
          </h2>
          <Button variant='secondary' size='sm' className='text-primary'>
            Xem chi tiết
            <Icon icon='lucide:arrow-right' className='ml-1 h-4 w-4' />
          </Button>
        </div>

        <Card
          className='card-hover border'
          style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
        >
          <Card.Content className='p-5'>
            <BarChart
              data={[45, 60, 40, 80, 55, 95, 70]}
              labels={['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']}
            />
          </Card.Content>
        </Card>
      </div>
    </div>
    </div>
    </div>
  )
}
