import { useProductFormField, useProductFormError, useProductFormActions } from '../store/product-form-store'

export default function BasicInfoForm() {
  const name = useProductFormField('name')
  const category = useProductFormField('category')
  const brand = useProductFormField('brand')
  const sku = useProductFormField('sku')
  
  const nameError = useProductFormError('name')
  const categoryError = useProductFormError('category')
  
  const { updateField } = useProductFormActions()

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Thông tin cơ bản</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Tên sản phẩm *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => updateField('name', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              nameError ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập tên sản phẩm"
          />
          {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Danh mục *
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => updateField('category', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              categoryError ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Chọn danh mục</option>
            <option value="electronics">Điện tử</option>
            <option value="fashion">Thời trang</option>
            <option value="home">Nhà cửa</option>
          </select>
          {categoryError && <p className="text-red-500 text-sm mt-1">{categoryError}</p>}
        </div>

        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
            Thương hiệu
          </label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => updateField('brand', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Nhập thương hiệu"
          />
        </div>

        <div>
          <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-2">
            SKU
          </label>
          <input
            type="text"
            id="sku"
            value={sku}
            onChange={(e) => updateField('sku', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Nhập mã SKU"
          />
        </div>
      </div>
    </div>
  )
}