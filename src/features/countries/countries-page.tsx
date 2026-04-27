import { useState } from 'react'
import { DataTable, type ColumnDef } from '@/components/ui/data-table'
import useGetCountryQuery from './hooks/use-get-countries.query'
import type { ICountry } from './types/country.type'
import { Icon } from '@iconify/react'
import CountryFormModal from './components/country-form-modal'
import { Button } from '@heroui/react'
import useDeleteCountryMutation from './hooks/use-delete-country.mutation'
import { toast } from '@heroui/react'

type CountryModalState = {
  isOpen: boolean
  mode: 'create' | 'update'
  data: ICountry | null
}

export default function CountriesPage() {
  const { data } = useGetCountryQuery()
  const deleteCountryMutation = useDeleteCountryMutation()

  const [modal, setModal] = useState<CountryModalState>({
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

  const openUpdateModal = (country: ICountry) => {
    setModal({
      isOpen: true,
      mode: 'update',
      data: country
    })
  }

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false
    }))
  }

  const handleDeleteCountry = (id: string) => {
    deleteCountryMutation.mutate(id, {
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

  const countriesColumns: ColumnDef<ICountry>[] = [
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
            onPress={() => handleDeleteCountry(row._id)}
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
          Quản lý quốc gia
        </div>
        <Button
          variant='primary'
          onPress={openCreateModal}
          className={'focus:ring-0'}
        >
          <Icon className='size-4' icon='gravity-ui:plus' />
          Thêm quốc gia
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
          columns={countriesColumns}
          data={data?.data.data ?? []}
          selectable
        />
      </div>
      <CountryFormModal
        isOpen={modal.isOpen}
        onOpenChange={(open) => !open && closeModal()}
        mode={modal.mode}
        initialData={modal.data}
      />
    </div>
  )
}
