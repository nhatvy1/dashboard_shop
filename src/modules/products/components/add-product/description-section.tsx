import React, { useState } from 'react'
import { Bold, Italic, List, Link, Image as ImageIcon } from 'lucide-react'

export default function DescriptionSection() {
  const [description, setDescription] = useState('')

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Mô tả sản phẩm</h2>
        <p className="text-sm text-gray-500 mt-1">
          Mô tả chi tiết giúp người mua hiểu rõ hơn về sản phẩm và tăng khả năng bán hàng
        </p>
      </div>

      <div className="space-y-6">
        {/* Rich text editor toolbar */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Mô tả sản phẩm *
          </label>
          
          {/* Toolbar */}
          <div className="border border-gray-300 rounded-t-lg p-2 bg-gray-50 flex items-center gap-2">
            <button className="p-2 rounded hover:bg-gray-200 transition-colors">
              <Bold className="w-4 h-4" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200 transition-colors">
              <Italic className="w-4 h-4" />
            </button>
            <div className="w-px h-6 bg-gray-300" />
            <button className="p-2 rounded hover:bg-gray-200 transition-colors">
              <List className="w-4 h-4" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200 transition-colors">
              <Link className="w-4 h-4" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200 transition-colors">
              <ImageIcon className="w-4 h-4" />
            </button>
          </div>
          
          {/* Editor */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-x border-b border-gray-300 rounded-b-lg px-4 py-3 h-64 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            placeholder="Nhập mô tả sản phẩm..."
            maxLength={3000}
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-500">
              Mô tả rõ ràng, chi tiết sẽ thu hút người mua và tăng khả năng bán hàng
            </p>
            <p className="text-xs text-gray-400">{description.length}/3000 ký tự</p>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Thông tin chi tiết
          </label>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Chất liệu
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="VD: Cotton 100%"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Kiểu dáng
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="VD: Slim fit, Regular fit"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Màu sắc
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="VD: Đỏ, Xanh, Trắng"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Kích thước
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="VD: S, M, L, XL"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Trọng lượng
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="VD: 200g"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Kích thước đóng gói
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="VD: 30x20x5 cm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}