import React, { useState } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'

export default function ProductImagesSection() {
  const [images, setImages] = useState<string[]>([])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      // Simulate image upload
      const newImages = Array.from(files).map(file => URL.createObjectURL(file))
      setImages(prev => [...prev, ...newImages].slice(0, 9)) // Max 9 images
    }
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Hình ảnh sản phẩm</h2>
        <p className="text-sm text-gray-500 mt-1">
          Hình ảnh sẽ được hiển thị tại các trang Kết quả tìm kiếm, Gợi ý hôm nay... Việc sử dụng hình ảnh đẹp sẽ thu hút được nhiều lượt xem và mua hàng hơn.
        </p>
      </div>

      <div className="space-y-6">
        {/* Hình ảnh chính */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Hình ảnh bìa *
          </label>
          <div className="flex flex-wrap gap-4">
            {/* Upload area */}
            <label className="relative w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-orange-400 transition-colors">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
              <div className="text-center">
                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                <span className="text-xs text-gray-500">Thêm hình</span>
              </div>
            </label>

            {/* Preview images */}
            {images.map((image, index) => (
              <div key={index} className="relative w-24 h-24 group">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg border"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full items-center justify-center hidden group-hover:flex hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                {index === 0 && (
                  <div className="absolute -bottom-2 left-0 right-0 bg-orange-500 text-white text-xs px-1 py-0.5 rounded text-center">
                    Ảnh bìa
                  </div>
                )}
              </div>
            ))}

            {/* Placeholder slots */}
            {Array.from({ length: Math.max(0, 9 - images.length) }, (_, i) => (
              <div
                key={`placeholder-${i}`}
                className="w-24 h-24 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center"
              >
                <ImageIcon className="w-8 h-8 text-gray-300" />
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs text-gray-500">
            <p>• Hình ảnh tỷ lệ 1:1, kích thước 1024x1024px</p>
            <p>• Định dạng: JPG, JPEG, PNG không vượt quá 3.0MB</p>
            <p>• Tối đa 9 hình. Hình đầu tiên sẽ được chọn làm ảnh bìa</p>
          </div>
        </div>

        {/* Video sản phẩm */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Video sản phẩm (Không bắt buộc)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="max-w-md mx-auto">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                Kéo thả video vào đây hoặc
                <span className="text-orange-500 ml-1 cursor-pointer hover:underline">
                  chọn video
                </span>
              </p>
              <p className="text-xs text-gray-500">
                • Kích thước tối đa 30MB, độ phân giải không vượt quá 1280x1280px<br/>
                • Độ dài: 10-60s<br/>
                • Định dạng: MP4<br/>
                • Lưu ý: Sản phẩm có thể hiển thị trong khi video đang được xử lý
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}