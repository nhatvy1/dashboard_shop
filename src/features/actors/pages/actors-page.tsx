import { useState } from 'react'
import { DataTable, type ColumnDef } from '@/components/ui/data-table'
import useGetActorQuery from './hooks/use-get-actors.query'
import type { IActor } from './types/actor.type'
import { Icon } from '@iconify/react'
import ActorFormModal from './components/actor-form-modal'
import { Button, toast } from '@heroui/react'
import useDeleteActorMutation from './hooks/use-delete-actor.mutation'

type ActorModalState = {
  isOpen: boolean
  mode: 'create' | 'update'
  data: IActor | null
}

export default function ActorsPage() {
  const { data } = useGetActorQuery()
  const deleteActorMutation = useDeleteActorMutation()

  const [modal, setModal] = useState<ActorModalState>({
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

  const openUpdateModal = (actor: IActor) => {
    setModal({
      isOpen: true,
      mode: 'update',
      data: actor
    })
  }

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false
    }))
  }

  const handleDeleteActor = (id: string) => {
    deleteActorMutation.mutate(id, {
      onSuccess: (res) => {
        toast(res?.data.message || 'Thành công', {
          variant: 'success'
        })
      },
      onError: (res: any) => {
        toast(res?.response?.data?.message || 'Thất bại', {
          variant: 'danger'
        })
      }
    })
  }

  const actorsColumns: ColumnDef<IActor>[] = [
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
          <Button
            isIconOnly
            size='sm'
            variant='danger-soft'
            onPress={() => handleDeleteActor(row._id)}
          >
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
          Quản lý diễn viên
        </div>
        <Button
          variant='primary'
          onPress={openCreateModal}
          className={'focus:ring-0'}
        >
          <Icon className='size-4' icon='gravity-ui:plus' />
          Thêm diễn viên
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
          columns={actorsColumns}
          data={data?.data.data ?? []}
          selectable
        />
      </div>
      <ActorFormModal
        isOpen={modal.isOpen}
        onOpenChange={(open) => !open && closeModal()}
        mode={modal.mode}
        initialData={modal.data}
      />
    </div>
  )
}
