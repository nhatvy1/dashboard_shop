import { useState } from 'react'
import { DataTable, type ColumnDef } from '@/components/ui/data-table'
import useGetCategoryQuery from './hooks/use-get-categories.query'
import type { ICategory } from './types/category.type'
import { Icon } from '@iconify/react'
import CategoryFormModal from './components/category-form-modal'
import { Button } from '@heroui/react'
import { PaginationWithSelect } from '@/components/ui/pagination'
import { useQueryParams } from '@/shared/hooks/use-query-params'

type CategoryModalState = {
  isOpen: boolean
  mode: 'create' | 'update'
  data: ICategory | null
}

export default function CategoriesPage() {
  const { getQueryParamAs } = useQueryParams()
  const page = getQueryParamAs('page', Number, 1)
  const limit = getQueryParamAs('limit', Number, 10)

  const { data } = useGetCategoryQuery({ page, limit })

  const [modal, setModal] = useState<CategoryModalState>({
    isOpen: false,
    mode: 'create',
    data: null
  })

  const openCreateModal = () => {
    setModal({
      isOpen: true,
      mode: 'create',
      data: null
    })
  }

  const openUpdateModal = (category: ICategory) => {
    setModal({
      isOpen: true,
      mode: 'update',
      data: category
    })
  }

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false
    }))
  }

  const categoriesColumns: ColumnDef<ICategory>[] = [
    {
      id: 'name',
      label: 'Name',
      sortable: true,
      render: (_, row) => <span>{row.name}</span>
    },
    {
      id: 'slug',
      label: 'Slug',
      sortable: true,
      render: (_, row) => <span>{row.slug}</span>
    },
    {
      id: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className='flex items-center gap-1'>
          <Button
            isIconOnly
            size='sm'
            variant='tertiary'
            onPress={() => openUpdateModal(row)}
          >
            <Icon className='size-4' icon='gravity-ui:pencil' />
          </Button>
          <Button isIconOnly size='sm' variant='danger-soft'>
            <Icon className='size-4' icon='gravity-ui:trash-bin' />
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      <div className='mb-4 flex items-center justify-between'>
        <div className='text-2xl font-bold text-gray-500 drop-shadow-lg'>
          Quản lý danh mục
        </div>
        <Button
          variant='primary'
          onPress={openCreateModal}
          className={'focus:ring-0'}
        >
          <Icon className='size-4' icon='gravity-ui:plus' />
          Thêm danh mục
        </Button>
      </div>
      <div
        className='rounded-2xl border p-6'
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          borderColor: 'var(--color-border-base)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <DataTable
          columns={categoriesColumns}
          data={data?.data.data.data ?? []}
          selectable
        />

        <PaginationWithSelect
          total={data?.data.data.total ?? 0}
          totalPages={data?.data.data.totalPages ?? 0}
        />
      </div>
      <CategoryFormModal
        isOpen={modal.isOpen}
        onOpenChange={(open) => !open && closeModal()}
        mode={modal.mode}
        initialData={modal.data}
      />
    </div>
  )
}
