import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import NavigationMenu from './navigation-menu'
import BasicInfoSection from './sections/basic-info-section'
import ProductImagesSection from './sections/product-images-section'
import DescriptionSection from './sections/description-section'
import SaleInfoSection from './sections/sale-info-section'
import ShippingSection from './sections/shipping-section'
import SEOSection from './sections/seo-section'
import ProductFormActions from '../components/product-form-actions'

const sections = [
  { id: 'basic', title: 'Thông tin cơ bản', component: BasicInfoSection },
  { id: 'images', title: 'Hình ảnh sản phẩm', component: ProductImagesSection },
  { id: 'description', title: 'Mô tả sản phẩm', component: DescriptionSection },
  { id: 'sale-info', title: 'Thông tin bán hàng', component: SaleInfoSection },
  { id: 'shipping', title: 'Vận chuyển', component: ShippingSection },
  { id: 'seo', title: 'Thông tin khác', component: SEOSection }
]

// Component cho từng section với useInView
function SectionWrapper({ section, onInView }: { section: any, onInView: (id: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    margin: "-144px 0px -40% 0px", // Tăng margin top để detect muộn hơn, giảm bottom để detect sớm hơn
    amount: 0.3 // Tăng threshold lên 30% để chắc chắn section đã vào đủ sâu
  })

  useEffect(() => {
    if (isInView) {
      onInView(section.id)
    }
  }, [isInView, section.id, onInView])

  const Component = section.component

  return (
    <div
      ref={ref}
      id={section.id}
      className='scroll-mt-32' // Cập nhật scroll margin cho header + nav
    >
      <Component />
    </div>
  )
}

export default function AddProductPage() {
  const [activeSection, setActiveSection] = useState('basic')

  // Smooth scroll tới section
  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to:', sectionId) // Debug log
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64 // Dashboard header height
      const navHeight = 64 // Navigation menu height  
      const offset = headerHeight + navHeight + 16 // Extra padding
      
      // Method 1: Try native scrollIntoView first
      try {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        })
        // Adjust for sticky header
        setTimeout(() => {
          window.scrollBy({ top: -offset, behavior: 'smooth' })
        }, 100)
      } catch (error) {
        // Method 2: Fallback to manual calculation
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset
        const targetPosition = elementTop - offset
        
        window.scrollTo({ 
          top: targetPosition, 
          behavior: 'smooth' 
        })
      }
    } else {
      console.log('Element not found:', sectionId) // Debug log
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavigationMenu
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      <div className='mx-auto max-w-6xl pt-6 pb-32'> {/* Giảm pt từ 20 xuống 6 vì đã có nav sticky */}
        <div className='flex gap-8'>
          {/* Form Content */}
          <div className='flex-1 space-y-6'>
            {sections.map((section) => (
              <SectionWrapper
                key={section.id}
                section={section}
                onInView={setActiveSection}
              />
            ))}
          </div>

          {/* Preview Sidebar */}
          <div className='hidden w-80 xl:block'>
            <div className='sticky top-32 rounded-lg border bg-white p-6'> {/* Cập nhật top từ 20 thành 32 */}
              <h3 className='mb-4 text-lg font-semibold'>Xem trước sản phẩm</h3>
              <div className='text-sm text-gray-500'>
                <div className='mb-4 flex aspect-square items-center justify-center rounded-lg bg-gray-100'>
                  <span>Hình ảnh sản phẩm</span>
                </div>
                <p className='mb-2'>Tên sản phẩm sẽ hiển thị ở đây</p>
                <p className='font-semibold text-orange-600'>Giá: ₫0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductFormActions />
    </div>
  )
}
