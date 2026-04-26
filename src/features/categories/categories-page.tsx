import { DataTable, type ColumnDef } from '@/components/ui/data-table'
import useGetCategoryQuery from './hooks/use-get-categories.query'
import type { ICategory } from './types/category.type'
import { Button } from '@heroui/react'
import { Icon } from '@iconify/react'

export default function CategoriesPage() {
  const { data } = useGetCategoryQuery()

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
          <Button isIconOnly size='sm' variant='tertiary'>
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
    <div
      className='rounded-2xl border p-6'
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        borderColor: 'var(--color-border-base)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <DataTable
        columns={categoriesColumns}
        data={data?.data || []}
        selectable
      />
    </div>
  )
}
