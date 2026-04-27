import { Modal, Button, TextField, Input, Label, toast } from '@heroui/react'
import { memo, useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { ICountry } from '../types/country.type'
import {
  createCountrySchema,
  updateCountrySchema,
  type CreateCountryFormData,
  type UpdateCountryFormData
} from '../schemas/country.schema'
import useCreateCountryMutation from '../hooks/use-create-country.mutation'
import useUpdateCountryMutation from '../hooks/use-update-country.mutation'
import type { ICreateCountryBody, IUpdateCountryBody } from '../types/country.body'

interface CountryFormModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  mode: 'create' | 'update'
  initialData?: ICountry | null
}

const CountryFormModal = ({
  isOpen,
  onOpenChange,
  mode,
  initialData
}: CountryFormModalProps) => {
  const createCountryMutation = useCreateCountryMutation()
  const updateCountryMutation = useUpdateCountryMutation()

  const schema = useMemo(
    () => (mode === 'create' ? createCountrySchema : updateCountrySchema),
    [mode]
  )

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<CreateCountryFormData | UpdateCountryFormData>({
    resolver: zodResolver(schema)
  })

  const handleCloseModal = () => {
    onOpenChange(false)
    reset()
  }

  const handleCreateCountry = (data: ICreateCountryBody) => {
    createCountryMutation.mutate(data, {
      onSuccess: (res) => {
        handleCloseModal()
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

  const handleUpdateCountry = (data: IUpdateCountryBody) => {
    if (initialData) {
      updateCountryMutation.mutate(
        { id: initialData._id, ...data },
        {
          onSuccess: () => {
            handleCloseModal()
          }
        }
      )
    }
  }

  const onFormSubmit = (
    data: CreateCountryFormData | UpdateCountryFormData
  ) => {
    const { name, slug } = data as { name: string; slug: string }
    if (mode === 'create') {
      handleCreateCountry({ name, slug })
    } else {
      handleUpdateCountry({ name, slug })
    }
  }

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        reset({
          name: initialData.name,
          slug: initialData.slug
        })
      } else {
        reset({
          name: '',
          slug: ''
        })
      }
    }
  }, [isOpen, initialData, reset])

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Backdrop variant='opaque'>
        <Modal.Container size='lg'>
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>
                {mode === 'create' ? 'Tạo mới quốc gia' : 'Cập nhật quốc gia'}
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <form
                className='flex flex-col gap-4'
                id='country-form'
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <TextField className='w-full' name='name' type='text'>
                  <Label>Tên quốc gia</Label>
                  <Controller
                    control={control}
                    name='name'
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder='Vui lòng nhập tên quốc gia'
                        className='rounded-md border border-gray-300 bg-none! shadow-none focus:ring-0'
                        variant='primary'
                      />
                    )}
                  />
                  {errors.name && (
                    <Label className='text-danger'>{errors.name.message}</Label>
                  )}
                </TextField>
                <TextField className='w-full' name='slug' type='text'>
                  <Label>Đường dẫn (Slug)</Label>
                  <Controller
                    control={control}
                    name='slug'
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder='Vui lòng nhập slug'
                        className='rounded-md border border-gray-300 bg-none! shadow-none focus:ring-0'
                      />
                    )}
                  />
                  {errors.slug && (
                    <Label className='text-danger'>{errors.slug.message}</Label>
                  )}
                </TextField>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onPress={() => onOpenChange(false)}>
                Đóng
              </Button>
              <Button
                variant='primary'
                isPending={
                  createCountryMutation.isPending ||
                  updateCountryMutation.isPending
                }
                type='submit'
                form='country-form'
              >
                {mode === 'create' ? 'Tạo quốc gia' : 'Cập nhật quốc gia'}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}

export default memo(CountryFormModal)
