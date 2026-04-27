import { useState } from 'react'
import { DataTable, type ColumnDef } from '@/components/ui/data-table'
import { Icon } from '@iconify/react'
import { Button } from '@heroui/react'
import type { IDirector } from '../types/director.type'
import useGetDirectorQuery from '../hooks/use-get-directors.query'
import DirectorFormModal from '../components/director-form-modal'

type DirectorModalState = {
  isOpen: boolean
  mode: 'create' | 'update'
  data: IDirector | null
}

export default function DirectorsPage() {
  const { data } = useGetDirectorQuery()

  const [modal, setModal] = useState<DirectorModalState>({
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

  const openUpdateModal = (director: IDirector) => {
    setModal({
      isOpen: true,
      mode: 'update',
      data: director
    })
  }

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false
    }))
  }


  const directorsColumns: ColumnDef<IDirector>[] = [
    {
      id: 'origin_name',
      label: 'Tên gốc',
      sortable: true,
      render: (_, row) => <span>{row.name}</span>
    },
    {
      id: 'name',
      label: 'Tên quốc tế',
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
        </div>
      )
    }
  ]

  return (
    <div>
      <div className='mb-4 flex items-center justify-between'>
        <div className='text-2xl font-bold text-gray-500 drop-shadow-lg'>
          Quản lý đạo diễn
        </div>
        <Button
          variant='primary'
          onPress={openCreateModal}
          className={'focus:ring-0'}
        >
          <Icon className='size-4' icon='gravity-ui:plus' />
          Thêm đạo diễn
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
          columns={directorsColumns}
          data={data?.data.data.data ?? []}
          selectable
        />
      </div>
      <DirectorFormModal
        isOpen={modal.isOpen}
        onOpenChange={(open) => !open && closeModal()}
        mode={modal.mode}
        initialData={modal.data}
      />
    </div>
  )
}
