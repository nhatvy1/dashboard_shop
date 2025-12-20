import React from 'react'

interface Section {
  id: string
  title: string
  component: React.ComponentType
}

interface NavigationMenuProps {
  sections: Section[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export default function NavigationMenu({ 
  sections, 
  activeSection, 
  onSectionClick 
}: NavigationMenuProps) {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16">
          <h1 className="text-xl font-semibold text-gray-900 mr-8">
            MMO88 
          </h1>
          
          <nav className="flex space-x-1">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id
              
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionClick(section.id)}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-lg transition-colors relative
                    ${isActive 
                      ? 'bg-orange-100 text-orange-600 border border-orange-200' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  <span className="flex items-center">
                    <span className={`
                      w-5 h-5 rounded-full text-xs flex items-center justify-center mr-2
                      ${isActive 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-300 text-gray-600'
                      }
                    `}>
                      {index + 1}
                    </span>
                    {section.title}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
