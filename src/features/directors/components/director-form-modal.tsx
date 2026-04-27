import { Modal, Button, TextField, Input, Label, toast } from '@heroui/react'
import { memo, useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { IDirector } from '../types/director.type'
import {
  createDirectorSchema,
  updateDirectorSchema,
  type CreateDirectorFormData,
  type UpdateDirectorFormData
} from '../schemas/director.schema'
import useCreateDirectorMutation from '../hooks/use-create-director.mutation'
import useUpdateDirectorMutation from '../hooks/use-update-director.mutation'
import type { ICreateDirectorBody, IUpdateDirectorBody } from '../types/director.body'

interface DirectorFormModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  mode: 'create' | 'update'
  initialData?: IDirector | null
}

const DirectorFormModal = ({
  isOpen,
  onOpenChange,
  mode,
  initialData
}: DirectorFormModalProps) => {
  const createDirectorMutation = useCreateDirectorMutation()
  const updateDirectorMutation = useUpdateDirectorMutation()

  const schema = useMemo(
    () => (mode === 'create' ? createDirectorSchema : updateDirectorSchema),
    [mode]
  )

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<CreateDirectorFormData | UpdateDirectorFormData>({
    resolver: zodResolver(schema)
  })

  const handleCloseModal = () => {
    onOpenChange(false)
    reset()
  }

  const handleCreateDirector = (data: ICreateDirectorBody) => {
    createDirectorMutation.mutate(data, {
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

  const handleUpdateDirector = (data: IUpdateDirectorBody) => {
    if (initialData) {
      updateDirectorMutation.mutate(
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
    data: CreateDirectorFormData | UpdateDirectorFormData
  ) => {
    const { name, slug } = data as { name: string; slug: string }
    if (mode === 'create') {
      handleCreateDirector({ name, slug })
    } else {
      handleUpdateDirector({ name, slug })
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
                {mode === 'create' ? 'Tạo mới đạo diễn' : 'Cập nhật đạo diễn'}
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <form
                className='flex flex-col gap-4'
                id='director-form'
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <TextField className='w-full' name='name' type='text'>
                  <Label>Tên đạo diễn</Label>
                  <Controller
                    control={control}
                    name='name'
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder='Vui lòng nhập tên đạo diễn'
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
                  createDirectorMutation.isPending ||
                  updateDirectorMutation.isPending
                }
                type='submit'
                form='director-form'
              >
                {mode === 'create' ? 'Tạo đạo diễn' : 'Cập nhật đạo diễn'}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}

export default memo(DirectorFormModal)
