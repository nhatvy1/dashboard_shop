import React, { useState } from 'react'
import { Truck, Package, Info } from 'lucide-react'

export default function ShippingSection() {
  const [shippingMethod, setShippingMethod] = useState('standard')

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Vận chuyển</h2>
        <p className="text-sm text-gray-500 mt-1">
          Thiết lập thông tin vận chuyển và phí ship cho sản phẩm
        </p>
      </div>

      <div className="space-y-6">
        {/* Trọng lượng và kích thước */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Trọng lượng và kích thước</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Trọng lượng (gram) *
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="0"
                min="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Dài (cm)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="0"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Rộng (cm)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="0"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Cao (cm)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="0"
                min="0"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Thông tin này giúp tính phí vận chuyển chính xác hơn
          </p>
        </div>

        {/* Phương thức vận chuyển */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Phương thức vận chuyển</h3>
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="shippingMethod"
                value="standard"
                checked={shippingMethod === 'standard'}
                onChange={(e) => setShippingMethod(e.target.value)}
                className="mt-1 text-orange-600 focus:ring-orange-500"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Vận chuyển tiêu chuẩn</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Giao hàng trong 3-5 ngày làm việc, phí ship từ 15,000₫
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="shippingMethod"
                value="fast"
                checked={shippingMethod === 'fast'}
                onChange={(e) => setShippingMethod(e.target.value)}
                className="mt-1 text-orange-600 focus:ring-orange-500"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Vận chuyển nhanh</span>
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                    Khuyến nghị
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Giao hàng trong 1-2 ngày làm việc, phí ship từ 25,000₫
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="shippingMethod"
                value="custom"
                checked={shippingMethod === 'custom'}
                onChange={(e) => setShippingMethod(e.target.value)}
                className="mt-1 text-orange-600 focus:ring-orange-500"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">Tự định nghĩa phí ship</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Thiết lập phí ship theo khu vực hoặc theo trọng lượng
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Cài đặt phí ship tùy chỉnh */}
        {shippingMethod === 'custom' && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Thiết lập phí ship tùy chỉnh</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phí ship nội thành (₫)
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phí ship ngoại thành (₫)
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="freeShipping"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="freeShipping" className="text-sm text-gray-900">
                  Miễn phí ship cho đơn hàng từ:
                </label>
                <input
                  type="number"
                  className="w-24 border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="0"
                />
                <span className="text-sm text-gray-500">₫</span>
              </div>
            </div>
          </div>
        )}

        {/* Thời gian xử lý */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Thời gian xử lý đơn hàng</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Thời gian chuẩn bị hàng
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option value="1">1 ngày làm việc</option>
                <option value="2">2 ngày làm việc</option>
                <option value="3">3 ngày làm việc</option>
                <option value="5">5 ngày làm việc</option>
                <option value="7">1 tuần</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Khu vực giao hàng
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option value="nationwide">Toàn quốc</option>
                <option value="region">Theo khu vực</option>
                <option value="city">Trong thành phố</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}