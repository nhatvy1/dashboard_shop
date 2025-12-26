import { Input, Label } from '@heroui/react'

export default function BasicInfoSection() {
  return (
    <div className='rounded-lg border bg-white p-6'>
      <div className='mb-4 border-b pb-4'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Thông tin cơ bản
        </h2>
        <p className='mt-1 text-sm text-gray-500'>
          Điền thông tin cơ bản về sản phẩm của bạn
        </p>
      </div>

      <div className='space-y-6'>
        <div>
          <Label htmlFor='product_name'>Tên sản phẩm</Label>
          <Input
            id='product_name'
            placeholder='Nhập tên sản phẩm'
            className='w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-base'
          />
          <p className='mt-1 text-xs text-gray-400'>0/120 ký tự</p>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div>
            <Label htmlFor='categories'>Ngành hàng</Label>
            
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-gray-900'>
              Danh mục *
            </label>
            <select className='w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-orange-500'>
              <option>Chọn danh mục</option>
              <option>Áo thun</option>
              <option>Áo sơ mi</option>
              <option>Quần jean</option>
            </select>
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-gray-900'>
              Danh mục con
            </label>
            <select className='w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-orange-500'>
              <option>Chọn danh mục con</option>
              <option>Áo thun nam</option>
              <option>Áo thun nữ</option>
              <option>Áo thun trẻ em</option>
            </select>
          </div>
        </div>

        {/* Thương hiệu */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <label className='mb-2 block text-sm font-medium text-gray-900'>
              Thương hiệu
            </label>
            <input
              type='text'
              className='w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-orange-500'
              placeholder='Nhập tên thương hiệu'
            />
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-gray-900'>
              Xuất xứ
            </label>
            <select className='w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-orange-500'>
              <option>Chọn xuất xứ</option>
              <option>Việt Nam</option>
              <option>Trung Quốc</option>
              <option>Thái Lan</option>
              <option>Hàn Quốc</option>
              <option>Nhật Bản</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
