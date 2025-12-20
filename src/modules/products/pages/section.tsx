import { useRef, useEffect } from 'react'
import { useNavStore } from './nav-store'
import { useInView } from 'framer-motion'
import BasicInfoForm from '../components/basic-info-form'
import SaleInfoForm from '../components/sale-info-form'

export default function Section({
  section
}: {
  section: { title: string; slug: string }
}) {
  const ref = useRef(null)
  const setActiveLink = useNavStore((s) => s.setActiveLink)

  const isInView = useInView(ref, {
    margin: '-50% 0px -50% 0px'
  })

  useEffect(() => {
    if (isInView) {
      setActiveLink(section.slug)
    }
  }, [isInView])

  const renderSectionContent = () => {
    switch (section.slug) {
      case 'basic':
        return <BasicInfoForm />
      case 'description':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Mô tả sản phẩm</h3>
            <p className="text-gray-500">Form mô tả sẽ được thêm ở đây...</p>
          </div>
        )
      case 'sale-info':
        return <SaleInfoForm />
      case 'shipping':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Thông tin vận chuyển</h3>
            <p className="text-gray-500">Form vận chuyển sẽ được thêm ở đây...</p>
          </div>
        )
      case 'other':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Thông tin khác</h3>
            <p className="text-gray-500">Form thông tin khác sẽ được thêm ở đây...</p>
          </div>
        )
      default:
        return <div>Section not found</div>
    }
  }

  return (
    <section
      id={section.slug}
      ref={ref}
      className='min-h-[500px] bg-white rounded-lg border border-gray-200 p-6'
    >
      {renderSectionContent()}
    </section>
  )
}
