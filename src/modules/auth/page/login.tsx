import { Button, Input, Label } from '@heroui/react'
import { Link } from 'react-router'
import { Icon } from '@iconify/react'

export function LoginPage() {
  return (
    <div className='flex min-h-screen flex-col bg-gray-50'>
      <header className='flex w-full items-center justify-between border-b border-gray-200 px-8 py-6'>
        <div className='flex items-center gap-3'>
          <div className='flex size-7 items-center justify-center rounded-sm bg-orange-500 text-white'>
            <span className='text-lg font-semibold'>M</span>
          </div>
          <span className='text-xl font-medium text-gray-700'>
            Kênh Người Bán
          </span>
        </div>
        <a href='#' className='text-orange-500 hover:underline'>
          Bạn cần giúp đỡ?
        </a>
      </header>

      <main className='flex flex-1 items-center justify-center px-2 md:px-0'>
        <div className='flex w-full max-w-4xl flex-col md:flex-row'>
          <div className='flex flex-1 flex-col items-center justify-center p-10'>
            <h2 className='mb-2 text-2xl font-bold text-orange-500'>
              Bán hàng chuyên nghiệp
            </h2>
            <p className='mb-6 text-center text-gray-700'>
              Quản lý shop của bạn một cách hiệu quả hơn trên Tạp hóa MMO88 với
              Kênh Người bán
            </p>
            <img
              src='/section/login.png'
              alt='Shopee Seller Banner'
              className='w-64'
            />
          </div>

          <div className='flex flex-1 flex-col justify-center rounded-2xl border border-gray-100 bg-white p-10 shadow-2xl'>
            <div className='mx-auto w-full max-w-md'>
              <h3 className='mb-6 text-xl font-medium text-gray-800'>
                Đăng nhập
              </h3>
              <form className='space-y-4'>
                <div>
                  <Label htmlFor='email' className='mb-1 block text-gray-700'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Nhập email'
                    className='w-full rounded-md border border-gray-200 shadow-none'
                  />
                </div>
                <div>
                  <Label
                    htmlFor='password'
                    className='mb-1 block text-gray-700'
                  >
                    Mật khẩu
                  </Label>
                  <Input
                    id='password'
                    type='password'
                    placeholder='Nhập mật khẩu'
                    className='w-full rounded-md border border-gray-200 shadow-none'
                  />
                </div>
                <Button className='w-full font-normal rounded-md bg-orange-500/70 hover:bg-orange-500/80'>
                  Đăng nhập
                </Button>
              </form>
            </div>
            <div className='text-left'>
              <Link
                to='/forgot'
                className='text-xs text-blue-600 hover:underline'
              >
                Quên mật khẩu
              </Link>
            </div>
            <div className='relative'>
              <div className='inline-flex w-full items-center justify-center'>
                <hr className='my-6 h-px w-4/5 border-0 bg-gray-200' />
                <span className='text-heading absolute left-1/2 -translate-x-1/2 bg-white px-3 text-gray-400'>
                  Or
                </span>
              </div>
            </div>
            <div className='flex gap-2'>
              <Button
                className='w-full rounded-lg border border-gray-200 bg-white'
                variant='tertiary'
              >
                <Icon icon='devicon:facebook' />
                Facebook
              </Button>
              <Button
                className='w-full rounded-lg border border-gray-200 bg-white'
                variant='tertiary'
              >
                <Icon icon='devicon:google' />
                Google
              </Button>
            </div>
            <p className='text-sm mt-5 text-center'>Bạn chưa có tài khoản? <Link to='/register' className='text-orange-500 font-medium hover:underline'>Đăng ký</Link></p>
          </div>
        </div>
      </main>

      <footer className='w-full py-4 text-center text-sm text-gray-400'>
        © 2025 Tạp hóa MMO88.
      </footer>
    </div>
  )
}
