// import { Button } from '@heroui/react'
// import { Link } from 'react-router'
// import { Icon } from '@iconify/react'
// import { FormLogin } from '../components/form-login'

// export function LoginPage() {

//   return (
//     <div className='flex min-h-screen flex-col bg-gray-50'>
//       <header className='flex w-full items-center justify-between border-b border-gray-200 px-8 py-6'>
//         <div className='flex items-center gap-3'>
//           <div className='flex size-7 items-center justify-center rounded-sm bg-orange-500 text-white'>
//             <span className='text-lg font-semibold'>M</span>
//           </div>
//           <span className='text-xl font-medium text-gray-700'>
//             Kênh Người Bán
//           </span>
//         </div>
//         <a href='#' className='text-orange-500 hover:underline'>
//           Bạn cần giúp đỡ?
//         </a>
//       </header>

//       <main className='flex flex-1 items-center justify-center px-2 md:px-0'>
//         <div className='flex w-full max-w-4xl flex-col md:flex-row'>
//           <div className='flex flex-1 flex-col items-center justify-center p-10'>
//             <h2 className='mb-2 text-2xl font-bold text-orange-500'>
//               Bán hàng chuyên nghiệp
//             </h2>
//             <p className='mb-6 text-center text-gray-700'>
//               Quản lý shop của bạn một cách hiệu quả hơn trên Tạp hóa MMO88 với
//               Kênh Người bán
//             </p>
//             <img
//               src='/section/login.png'
//               alt='Shopee Seller Banner'
//               className='w-64'
//             />
//           </div>

//           <div className='flex flex-1 flex-col justify-center rounded-2xl border border-gray-100 bg-white p-10 shadow-2xl'>
//             <div className='mx-auto w-full max-w-md'>
//               <h3 className='mb-6 text-xl font-medium text-gray-800'>
//                 Đăng nhập
//               </h3>
//               <FormLogin />
//             </div>
//             <div className='text-left'>
//               <Link
//                 to='/forgot'
//                 className='text-xs text-blue-600 hover:underline'
//               >
//                 Quên mật khẩu
//               </Link>
//             </div>
//             <div className='relative'>
//               <div className='inline-flex w-full items-center justify-center'>
//                 <hr className='my-6 h-px w-4/5 border-0 bg-gray-200' />
//                 <span className='text-heading absolute left-1/2 -translate-x-1/2 bg-white px-3 text-gray-400'>
//                   Or
//                 </span>
//               </div>
//             </div>
//             <div className='flex gap-2'>
//               <Button
//                 className='w-full rounded-lg border border-gray-200 bg-white'
//                 variant='tertiary'
//               >
//                 <Icon icon='devicon:facebook' />
//                 Facebook
//               </Button>
//               <Button
//                 className='w-full rounded-lg border border-gray-200 bg-white'
//                 variant='tertiary'
//               >
//                 <Icon icon='devicon:google' />
//                 Google
//               </Button>
//             </div>
//             <p className='mt-5 text-center text-sm'>
//               Bạn chưa có tài khoản?{' '}
//               <Link
//                 to='/register'
//                 className='font-medium text-orange-500 hover:underline'
//               >
//                 Đăng ký
//               </Link>
//             </p>
//           </div>
//         </div>
//       </main>

//       <footer className='w-full py-4 text-center text-sm text-gray-400'>
//         © 2025 Tạp hóa MMO88.
//       </footer>
//     </div>
//   )
// }

import { useRef, useEffect, useState } from 'react'

export function LoginPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src =
        'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'
      video.play().catch(() => {})
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current!
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  const onTimeUpdate = () => {
    const video = videoRef.current!
    setCurrentTime(video.currentTime)
  }

  const onLoadedMetadata = () => {
    setDuration(videoRef.current!.duration)
  }

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    videoRef.current!.currentTime = time
    setCurrentTime(time)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="group relative w-full max-w-xl overflow-hidden rounded-2xl bg-black shadow-2xl">
        {/* VIDEO */}
        <video
          ref={videoRef}
          playsInline
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          className="aspect-video w-full object-cover"
        />

        {/* CONTROLS */}
        <div className="absolute inset-0 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-10">
            {/* Progress */}
            <input
              type="range"
              min={0}
              max={duration}
              step={0.1}
              value={currentTime}
              onChange={seek}
              className="mb-3 w-full cursor-pointer accent-orange-500"
            />

            <div className="flex items-center gap-4 text-white">
              {/* Play */}
              <button
                onClick={togglePlay}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
              >
                {playing ? '❚❚' : '▶'}
              </button>

              {/* Time */}
              <span className="text-sm text-white/80">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatTime(sec: number) {
  if (!sec || Number.isNaN(sec)) return '00:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

