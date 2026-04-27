import { Modal, Button, TextField, Input, Label, toast } from '@heroui/react'
import { memo, useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { IActor } from '../types/actor.type'
import {
  createActorSchema,
  updateActorSchema,
  type CreateActorFormData,
  type UpdateActorFormData
} from '../schemas/actor.schema'
import useCreateActorMutation from '../hooks/use-create-actor.mutation'
import useUpdateActorMutation from '../hooks/use-update-actor.mutation'
import type { ICreateActorBody, IUpdateActorBody } from '../types/actor.body'

interface ActorFormModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  mode: 'create' | 'update'
  initialData?: IActor | null
}

const ActorFormModal = ({
  isOpen,
  onOpenChange,
  mode,
  initialData
}: ActorFormModalProps) => {
  const createActorMutation = useCreateActorMutation()
  const updateActorMutation = useUpdateActorMutation()

  const schema = useMemo(
    () => (mode === 'create' ? createActorSchema : updateActorSchema),
    [mode]
  )

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<CreateActorFormData | UpdateActorFormData>({
    resolver: zodResolver(schema)
  })

  const handleCloseModal = () => {
    onOpenChange(false)
    reset()
  }

  const handleCreateActor = (data: ICreateActorBody) => {
    createActorMutation.mutate(data, {
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

  const handleUpdateActor = (data: IUpdateActorBody) => {
    if (initialData) {
      updateActorMutation.mutate(
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
    data: CreateActorFormData | UpdateActorFormData
  ) => {
    const { name, slug } = data as { name: string; slug: string }
    if (mode === 'create') {
      handleCreateActor({ name, slug })
    } else {
      handleUpdateActor({ name, slug })
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
                {mode === 'create' ? 'Tạo mới diễn viên' : 'Cập nhật diễn viên'}
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <form
                className='flex flex-col gap-4'
                id='actor-form'
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <TextField className='w-full' name='name' type='text'>
                  <Label>Tên diễn viên</Label>
                  <Controller
                    control={control}
                    name='name'
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder='Vui lòng nhập tên diễn viên'
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
                  createActorMutation.isPending ||
                  updateActorMutation.isPending
                }
                type='submit'
                form='actor-form'
              >
                {mode === 'create' ? 'Tạo diễn viên' : 'Cập nhật diễn viên'}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}

export default memo(ActorFormModal)
