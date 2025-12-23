import React, { useState } from 'react'
import { Plus, Minus, AlertCircle, X } from 'lucide-react'

export default function SaleInfoSection() {
  const [hasVariations, setHasVariations] = useState(false)
  const [variations, setVariations] = useState([
    { name: 'Màu sắc', values: ['Đỏ', 'Xanh'] },
    { name: 'Kích thước', values: ['S', 'M', 'L'] }
  ])

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Thông tin bán hàng</h2>
        <p className="text-sm text-gray-500 mt-1">
          Thiết lập giá cả và quản lý kho hàng cho sản phẩm
        </p>
      </div>

      <div className="space-y-6">
        {/* Phân loại hàng */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-sm font-medium text-gray-900">
              Phân loại hàng
            </label>
            <button
              onClick={() => setHasVariations(!hasVariations)}
              className="text-sm text-orange-600 hover:text-orange-700 font-medium"
            >
              {hasVariations ? 'Bỏ phân loại' : '+ Thêm phân loại'}
            </button>
          </div>

          {hasVariations && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              {variations.map((variation, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={variation.name}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      placeholder="Tên nhóm phân loại"
                    />
                    <button className="p-2 text-gray-400 hover:text-red-500">
                      <Minus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {variation.values.map((value, valueIndex) => (
                      <span
                        key={valueIndex}
                        className="inline-flex items-center gap-1 bg-white border border-gray-300 rounded px-3 py-1 text-sm"
                      >
                        {value}
                        <button className="text-gray-400 hover:text-red-500">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <button className="border-2 border-dashed border-gray-300 rounded px-3 py-1 text-sm text-gray-500 hover:border-orange-300 hover:text-orange-600">
                      + Thêm
                    </button>
                  </div>
                </div>
              ))}
              <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                + Thêm nhóm phân loại
              </button>
            </div>
          )}
        </div>

        {/* Thông tin giá và kho */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Giá */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Giá và số lượng</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Giá bán *
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
                <span className="absolute right-3 top-2 text-gray-500">₫</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Giá so sánh (Giá gốc)
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
                <span className="absolute right-3 top-2 text-gray-500">₫</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Hiển thị giá gốc để khách hàng thấy mức giảm giá
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Kho hàng *
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          {/* SKU và mã vạch */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Quản lý kho</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                SKU (Stock Keeping Unit)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Mã SKU"
              />
              <p className="text-xs text-gray-500 mt-1">
                Mã để quản lý kho hàng, có thể để trống
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Mã vạch (Barcode)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Mã vạch"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="trackQuantity"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="trackQuantity" className="text-sm text-gray-900">
                Theo dõi số lượng sản phẩm
              </label>
            </div>
          </div>
        </div>

        {/* Cảnh báo kho hàng */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-orange-800 mb-1">Lưu ý về giá và kho hàng:</p>
              <ul className="text-orange-700 space-y-1 text-xs">
                <li>• Giá bán phải lớn hơn 1,000₫</li>
                <li>• Nếu có giá so sánh, giá bán phải nhỏ hơn giá so sánh</li>
                <li>• Số lượng kho hàng phải là số nguyên dương</li>
                <li>• SKU phải là duy nhất trong cửa hàng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}