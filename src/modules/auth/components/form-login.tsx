import { Button, FieldError, Input, Label, TextField } from '@heroui/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginSchema } from '../schemas'

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema()),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: LoginSchema) => {
    console.log(data)
    alert(JSON.stringify(data))
  }

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <TextField isInvalid={errors?.email?.message ? true : false}>
        <Label htmlFor='email' className='mb-1 block text-gray-700'>
          Email
        </Label>
        <Input
          id='email'
          type='email'
          placeholder='Nhập email'
          {...register('email')}
          className='w-full rounded-md border border-gray-200 shadow-none'
          autoComplete='off'
        />
        <FieldError>{errors?.email?.message}</FieldError>
      </TextField>
      <TextField isInvalid={errors?.password?.message ? true : false}>
        <Label htmlFor='password' className='mb-1 block text-gray-700'>
          Mật khẩu
        </Label>
        <Input
          id='password'
          type='password'
          placeholder='Nhập mật khẩu'
          className='w-full rounded-md border border-gray-200 shadow-none'
          {...register('password')}
          autoComplete='off'
        />
        <FieldError>{errors?.password?.message}</FieldError>
      </TextField>
      <Button
        type='submit'
        className='w-full rounded-md bg-orange-500/70 font-normal hover:bg-orange-500/80'
      >
        Đăng nhập
      </Button>
    </form>
  )
}
