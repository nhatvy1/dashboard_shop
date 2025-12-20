import React, { useState } from 'react'
import { Save, Eye, AlertCircle } from 'lucide-react'

export default function ProductFormActions() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSave = async (type: 'draft' | 'publish') => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log(`Saving as ${type}...`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePreview = () => {
    console.log('Preview product...')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Status info */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>Tự động lưu nháp</span>
            </div>
            <span className="text-gray-400">•</span>
            <span>Cập nhật lần cuối: vài giây trước</span>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center gap-3">
            {/* Preview button */}
            <button
              onClick={handlePreview}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              <Eye className="w-4 h-4" />
              Xem trước
            </button>

            {/* Save as draft */}
            <button
              onClick={() => handleSave('draft')}
              className="flex items-center gap-2 px-6 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
              disabled={isSubmitting}
            >
              <Save className="w-4 h-4" />
              Lưu nháp
            </button>

            {/* Save and publish */}
            <button
              onClick={() => handleSave('publish')}
              className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Đang xử lý...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Lưu & Hiển thị
                </>
              )}
            </button>
          </div>
        </div>

        {/* Warning message if form has errors */}
        <div className="mt-3 flex items-center gap-2 text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>
            Vui lòng kiểm tra và điền đầy đủ các thông tin bắt buộc (*) trước khi lưu sản phẩm.
          </span>
        </div>
      </div>
    </div>
  )
}