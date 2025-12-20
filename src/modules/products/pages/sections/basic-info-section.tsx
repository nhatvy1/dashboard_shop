import React from 'react'

export default function BasicInfoSection() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Thông tin cơ bản</h2>
        <p className="text-sm text-gray-500 mt-1">
          Điền thông tin cơ bản về sản phẩm của bạn
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Tên sản phẩm */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Tên sản phẩm *
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Nhập tên sản phẩm"
            maxLength={120}
          />
          <p className="text-xs text-gray-400 mt-1">0/120 ký tự</p>
        </div>

        {/* Danh mục */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Ngành hàng *
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Chọn ngành hàng</option>
              <option>Thời trang nam</option>
              <option>Thời trang nữ</option>
              <option>Điện thoại & Phụ kiện</option>
              <option>Máy tính & Laptop</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Danh mục *
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Chọn danh mục</option>
              <option>Áo thun</option>
              <option>Áo sơ mi</option>
              <option>Quần jean</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Danh mục con
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Chọn danh mục con</option>
              <option>Áo thun nam</option>
              <option>Áo thun nữ</option>
              <option>Áo thun trẻ em</option>
            </select>
          </div>
        </div>

        {/* Thương hiệu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Thương hiệu
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Nhập tên thương hiệu"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Xuất xứ
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
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