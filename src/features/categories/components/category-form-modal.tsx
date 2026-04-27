import { Modal, Button, TextField, Input, Label, toast } from '@heroui/react'
import { memo, useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { ICategory } from '../types/category.type'
import {
  createCategorySchema,
  updateCategorySchema,
  type CreateCategoryFormData,
  type UpdateCategoryFormData
} from '../schemas/category.schema'
import useCreateCategoryMutation from '../hooks/use-create-category.mutation'
import useUpdateCategoryMutation from '../hooks/use-update-category.mutation'
import type { ICreateCatesBody, IUpdateCatesBody } from '../types/category.body'

interface CategoryFormModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  mode: 'create' | 'update'
  initialData?: ICategory | null
}

const CategoryFormModal = ({
  isOpen,
  onOpenChange,
  mode,
  initialData
}: CategoryFormModalProps) => {
  const createCategoryMutation = useCreateCategoryMutation()
  const updateCategoryMutation = useUpdateCategoryMutation()

  const schema = useMemo(
    () => (mode === 'create' ? createCategorySchema : updateCategorySchema),
    [mode]
  )

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<CreateCategoryFormData | UpdateCategoryFormData>({
    resolver: zodResolver(schema)
  })

  const handleCloseModal = () => {
    onOpenChange(false)
    reset()
  }

  const handleCreateCategory = (data: ICreateCatesBody) => {
    createCategoryMutation.mutate(data, {
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

  const handleUpdateCategory = (data: IUpdateCatesBody) => {
    if (initialData) {
      updateCategoryMutation.mutate(
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
    data: CreateCategoryFormData | UpdateCategoryFormData
  ) => {
    const { name, slug } = data as { name: string; slug: string }
    if (mode === 'create') {
      handleCreateCategory({ name, slug })
    } else {
      handleUpdateCategory({ name, slug })
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
                {mode === 'create' ? 'Tạo mới danh mục' : 'Cập nhật danh mục'}
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <form
                className='flex flex-col gap-4'
                id='category-form'
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <TextField className='w-full' name='name' type='text'>
                  <Label>Tên danh mục</Label>
                  <Controller
                    control={control}
                    name='name'
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder='Vui lòng nhập danh mục'
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
                  createCategoryMutation.isPending ||
                  updateCategoryMutation.isPending
                }
                type='submit'
                form='category-form'
              >
                {mode === 'create' ? 'Tạo danh mục' : 'Cập nhật danh mục'}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}

export default memo(CategoryFormModal)
