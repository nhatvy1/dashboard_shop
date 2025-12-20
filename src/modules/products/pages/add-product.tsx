import React, { useState, useEffect, useRef } from 'react'
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

export default function AddProductPage() {
  const [activeSection, setActiveSection] = useState('basic')
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Theo dõi scroll để cập nhật active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // offset cho sticky nav

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = sectionRefs.current[section.id]
        
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll tới section
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      const offset = 80 // Offset cho sticky nav
      const top = element.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Menu - Sticky */}
      <NavigationMenu 
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-32">
        <div className="flex gap-8">
          {/* Form Content */}
          <div className="flex-1 space-y-6">
            {sections.map((section) => {
              const Component = section.component
              return (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => { sectionRefs.current[section.id] = el }}
                  className="scroll-mt-20"
                >
                  <Component />
                </div>
              )
            })}
          </div>
          
          {/* Preview Sidebar */}
          <div className="hidden xl:block w-80">
            <div className="sticky top-20 bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Xem trước sản phẩm</h3>
              <div className="text-sm text-gray-500">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span>Hình ảnh sản phẩm</span>
                </div>
                <p className="mb-2">Tên sản phẩm sẽ hiển thị ở đây</p>
                <p className="text-orange-600 font-semibold">Giá: ₫0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed Action Bar */}
      <ProductFormActions />
    </div>
  )
}
