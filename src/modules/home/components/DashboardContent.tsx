import { Button, Card } from '@heroui/react'
import { Icon } from '@iconify/react'

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  color?: 'default' | 'primary' | 'warning' | 'success'
}

function StatCard({
  title,
  value,
  subtitle,
  color = 'default'
}: StatCardProps) {
  const colorClasses = {
    default: 'bg-white',
    primary: 'bg-blue-50 border-blue-200',
    warning: 'bg-orange-50 border-orange-200',
    success: 'bg-green-50 border-green-200'
  }

  return (
    <Card className={`${colorClasses[color]} border`}>
      <Card.Content className='p-6'>
        <div className='text-center'>
          <h3 className='text-2xl font-bold text-gray-900'>{value}</h3>
          <p className='mt-1 text-sm text-gray-600'>{title}</p>
          {subtitle && <p className='mt-1 text-xs text-gray-500'>{subtitle}</p>}
        </div>
      </Card.Content>
    </Card>
  )
}

function ActionCard({
  title,
  description,
  icon,
  color
}: {
  title: string
  description: string
  icon: string
  color: string
}) {
  return (
    <Card className='cursor-pointer border border-gray-200 transition-shadow hover:shadow-md'>
      <Card.Content className='p-4'>
        <div className='flex items-start space-x-4'>
          <div className={`rounded-lg p-2 ${color}`}>
            <Icon icon={icon} className='h-6 w-6' />
          </div>
          <div className='flex-1'>
            <h4 className='text-sm font-semibold text-gray-900'>{title}</h4>
            <p className='mt-1 text-xs text-gray-600'>{description}</p>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
}

export default function DashboardContent() {
  return (
    <div className='space-y-6'>
      {/* To-do List Section */}
      <div>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-900'>
            Danh sách cần làm
          </h2>
          <Button variant='primary' size='sm'>
            Xem thêm{' '}
            <Icon icon='mingcute:right-line' className='ml-1 h-4 w-4' />
          </Button>
        </div>

        <div className='mb-6 grid grid-cols-1 gap-4 md:grid-cols-4'>
          <StatCard title='Chờ Lấy Hàng' value='0' />
          <StatCard title='Đã Xử Lý' value='0' />
          <StatCard title='Đơn Trả hàng/Hoàn tiền/Hủy' value='0' />
          <StatCard title='Sản Phẩm Bị Tạm Khóa' value='0' />
        </div>
      </div>

      {/* Sales Analytics Section */}
      <div>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-900'>
            Phân Tích Bán Hàng
          </h2>
          <div className='flex items-center space-x-2'>
            <span className='text-sm text-gray-500'>
              Hôm nay 00:00 GMT+7 15:00(DD hiện thay đổi số với biểu qua)
            </span>
            <Button variant='primary' size='sm'>
              Xem thêm{' '}
              <Icon icon='mingcute:right-line' className='ml-1 h-4 w-4' />
            </Button>
          </div>
        </div>

        <div className='mb-6 grid grid-cols-1 gap-4 md:grid-cols-5'>
          <StatCard title='Doanh số' value='₫0' subtitle='↗ 0,00%' />
          <StatCard title='Lượt truy cập' value='0' subtitle='↗ 0,00%' />
          <StatCard title='Product Clicks' value='0' subtitle='↗ 0,00%' />
          <StatCard title='Đơn hàng' value='0' subtitle='↗ 0,00%' />
          <StatCard
            title='Order Conversion Rate'
            value='0,00%'
            subtitle='↗ 0,00%'
          />
        </div>
      </div>

      {/* Performance Section */}
      <div>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-900'>
            Hiệu quả bán hàng
          </h2>
          <Button variant='primary' size='sm'>
            Xem thêm{' '}
            <Icon icon='mingcute:right-line' className='ml-1 h-4 w-4' />
          </Button>
        </div>

        <Card className='mb-6'>
          <Card.Content className='p-6'>
            <div className='flex items-center space-x-4'>
              <Icon
                icon='mingcute:calendar-line'
                className='h-8 w-8 text-orange-500'
              />
              <div className='flex-1'>
                <p className='text-sm text-gray-600'>Xuất sắc</p>
                <p className='text-xs text-gray-500'>Tất cả chỉ số đều tốt</p>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Two column layout for remaining sections */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {/* Shopee Services */}
        <div>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-900'>
              Dịch vụ Hiển thị Shopee
            </h2>
            <Button variant='primary' size='sm'>
              Xem thêm{' '}
              <Icon icon='mingcute:right-line' className='ml-1 h-4 w-4' />
            </Button>
          </div>

          <Card className='border border-orange-200 bg-orange-50'>
            <Card.Content className='p-6'>
              <div className='flex items-start space-x-4'>
                <Icon
                  icon='mingcute:promotion-line'
                  className='h-8 w-8 shrink-0 text-orange-500'
                />
                <div className='flex-1'>
                  <h3 className='mb-2 font-semibold text-gray-900'>
                    Tôi đã hỏa doanh số bán hàng của bạn với Dịch vụ Hiển thị
                    Shopee!
                  </h3>
                  <p className='mb-4 text-sm text-gray-600'>
                    Tìm hiểu thêm về Dịch vụ Hiển thị Shopee để tăo chiến dịch
                    một cách hiệu quả và tốt ưu chi phí.
                  </p>
                  <Button variant='danger' size='sm'>
                    Tìm hiểu thêm
                  </Button>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Notable Updates */}
        <div>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-900'>Tin Nổi Bật</h2>
            <Button variant='primary' size='sm'>
              Xem thêm{' '}
              <Icon icon='mingcute:right-line' className='ml-1 h-4 w-4' />
            </Button>
          </div>

          <Card className='mb-4'>
            <Card.Content className='p-4'>
              <div className='space-y-3'>
                <ActionCard
                  title='🔥 Shopee cập nhật lịch Tết Dương lịch 2026'
                  description='📢 Bản tin Tết Dương lịch 1.1.2026 ✅ Lịch làm việc của Shopee và các đơn vị vận chuyển ✅ Lịch rút tiền, liên hệ CSKH và các lưu ý khác. Xem ngay👇'
                  icon='mingcute:calendar-line'
                  color='bg-red-100 text-red-600'
                />

                <ActionCard
                  title='🎯TỐI ƯU GIÁ THẦU NGAY KHUYẾN MÃI'
                  description='✅Tăng lực hiện thị ngay Siêu Sale với Tối Ưu Giá Thầu Ngay Khuyến Mãi - hỗ trợ nàng giá thầu tới đa 4 lần. 🎯Giai đoạn áp dụng...'
                  icon='mingcute:target-line'
                  color='bg-yellow-100 text-yellow-600'
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
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-900'>
              Tăng đơn cùng KOL
            </h2>
            <Button variant='primary' size='sm'>
              Thêm <Icon icon='mingcute:add-line' className='ml-1 h-4 w-4' />
            </Button>
          </div>

          <Card className='border border-red-200 bg-red-50'>
            <Card.Content className='p-6'>
              <div className='text-center'>
                <Icon
                  icon='mingcute:trophy-line'
                  className='mx-auto mb-4 h-16 w-16 text-red-500'
                />
                <h3 className='mb-2 font-semibold text-gray-900'>
                  Chi thành toàn cho các đơn hàng thành công được mang đến từ
                  KOL!
                </h3>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Livestream */}
        <div>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-900'>Livestream</h2>
            <Button variant='primary' size='sm'>
              Xem thêm{' '}
              <Icon icon='mingcute:right-line' className='ml-1 h-4 w-4' />
            </Button>
          </div>

          <Card>
            <Card.Content className='p-6'>
              <h3 className='mb-4 font-semibold text-gray-900'>
                Bắt đầu Livestream ngay
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-600'>
                    Chuẩn bị nội dung
                  </span>
                  <Icon
                    icon='mingcute:check-circle-line'
                    className='h-5 w-5 text-green-500'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-600'>
                    Thiết lập thiết bị
                  </span>
                  <Icon
                    icon='mingcute:time-line'
                    className='h-5 w-5 text-gray-400'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-600'>
                    Bắt đầu phát trực tiếp
                  </span>
                  <Icon
                    icon='mingcute:time-line'
                    className='h-5 w-5 text-gray-400'
                  />
                </div>
              </div>
              <Button className='mt-4 w-full'>Bắt đầu Livestream</Button>
            </Card.Content>
          </Card>
        </div>
      </div>

      {/* Task Management Section */}
      <div>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-900'>
            Nhiệm Vụ Người Bán
          </h2>
          <Button variant='primary' size='sm'>
            Xem thêm{' '}
            <Icon icon='mingcute:right-line' className='ml-1 h-4 w-4' />
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <ActionCard
            title='Hoàn thành hồ sơ Shop'
            description='Cung cấp đầy đủ thông tin shop để tăng độ tin cậy'
            icon='mingcute:store-2-line'
            color='bg-blue-100 text-blue-600'
          />

          <ActionCard
            title='Thêm sản phẩm đầu tiên'
            description='Bắt đầu bán hàng bằng cách thêm sản phẩm'
            icon='mingcute:add-circle-line'
            color='bg-green-100 text-green-600'
          />

          <ActionCard
            title='Thiết lập vận chuyển'
            description='Cấu hình phương thức và phí vận chuyển'
            icon='mingcute:truck-line'
            color='bg-purple-100 text-purple-600'
          />
        </div>
      </div>
    </div>
  )
}
