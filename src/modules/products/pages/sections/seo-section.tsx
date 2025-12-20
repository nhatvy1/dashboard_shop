import React, { useState } from 'react'
import { Search, Tag, Eye, BarChart3 } from 'lucide-react'

export default function SEOSection() {
  const [metaTitle, setMetaTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Thông tin khác</h2>
        <p className="text-sm text-gray-500 mt-1">
          Tối ưu SEO và thiết lập các thông tin bổ sung cho sản phẩm
        </p>
      </div>

      <div className="space-y-6">
        {/* SEO Settings */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Search className="w-5 h-5" />
            Tối ưu SEO
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Tiêu đề SEO
              </label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tiêu đề trang sẽ hiển thị trên kết quả tìm kiếm"
                maxLength={60}
              />
              <p className="text-xs text-gray-400 mt-1">{metaTitle.length}/60 ký tự</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Mô tả SEO
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Mô tả ngắn gọn về sản phẩm để hiển thị trong kết quả tìm kiếm"
                maxLength={160}
              />
              <p className="text-xs text-gray-400 mt-1">{metaDescription.length}/160 ký tự</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Từ khóa SEO
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Từ khóa 1, từ khóa 2, từ khóa 3..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Phân cách các từ khóa bằng dấu phẩy, tối đa 10 từ khóa
              </p>
            </div>
          </div>
        </div>

        {/* Tags & Labels */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Tags & Nhãn
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Tags sản phẩm
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Nhập tags và nhấn Enter để thêm"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  thời trang
                  <button className="text-orange-500 hover:text-orange-700">×</button>
                </span>
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  áo thun
                  <button className="text-orange-500 hover:text-orange-700">×</button>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="newProduct"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="newProduct" className="text-sm text-gray-900">
                  Sản phẩm mới
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hotProduct"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="hotProduct" className="text-sm text-gray-900">
                  Sản phẩm hot
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featuredProduct"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="featuredProduct" className="text-sm text-gray-900">
                  Sản phẩm nổi bật
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="limitedEdition"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="limitedEdition" className="text-sm text-gray-900">
                  Phiên bản giới hạn
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Cài đặt hiển thị
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Trạng thái sản phẩm
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option value="draft">Nháp - Không hiển thị</option>
                <option value="published">Đã xuất bản - Hiển thị công khai</option>
                <option value="scheduled">Lên lịch xuất bản</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Thứ tự sắp xếp
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
                <p className="text-xs text-gray-500 mt-1">Số thứ tự hiển thị (số càng nhỏ càng ưu tiên)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Ngày xuất bản
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Theo dõi & Phân tích
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="enableAnalytics"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                defaultChecked
              />
              <label htmlFor="enableAnalytics" className="text-sm text-gray-900">
                Bật theo dõi lượt xem và tương tác
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="enableRecommendation"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                defaultChecked
              />
              <label htmlFor="enableRecommendation" className="text-sm text-gray-900">
                Cho phép hệ thống gợi ý sản phẩm này
              </label>
            </div>
          </div>
        </div>

        {/* Preview SEO */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Xem trước kết quả tìm kiếm</h4>
          <div className="bg-white border rounded p-3">
            <h5 className="text-blue-600 hover:underline cursor-pointer">
              {metaTitle || 'Tiêu đề sản phẩm sẽ hiển thị ở đây'}
            </h5>
            <p className="text-green-600 text-sm mt-1">
              https://yourstore.com/products/product-name
            </p>
            <p className="text-gray-600 text-sm mt-1">
              {metaDescription || 'Mô tả sản phẩm sẽ hiển thị ở đây và giúp người dùng hiểu rõ hơn về sản phẩm...'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}