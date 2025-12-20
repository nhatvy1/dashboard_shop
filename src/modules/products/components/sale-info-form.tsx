import { useProductFormField, useProductFormActions } from '../store/product-form-store'

export default function SaleInfoForm() {
  const price = useProductFormField('price')
  const salePrice = useProductFormField('salePrice')
  const quantity = useProductFormField('quantity')
  const minQuantity = useProductFormField('minQuantity')
  
  const priceError = useProductFormField('price')
  const quantityError = useProductFormField('quantity')
  
  const { updateField } = useProductFormActions()

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Thông tin bán hàng</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Giá bán *
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => updateField('price', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="0"
            min="0"
          />
        </div>

        <div>
          <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700 mb-2">
            Giá khuyến mãi
          </label>
          <input
            type="number"
            id="salePrice"
            value={salePrice}
            onChange={(e) => updateField('salePrice', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="0"
            min="0"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
            Số lượng *
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => updateField('quantity', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="0"
            min="0"
          />
        </div>

        <div>
          <label htmlFor="minQuantity" className="block text-sm font-medium text-gray-700 mb-2">
            Số lượng tối thiểu
          </label>
          <input
            type="number"
            id="minQuantity"
            value={minQuantity}
            onChange={(e) => updateField('minQuantity', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="0"
            min="0"
          />
        </div>
      </div>
    </div>
  )
}