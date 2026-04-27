import queryClientConfig from '@/shared/configs/query-client-config'
import { Toast } from '@heroui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClientConfig}>
      <Toast.Provider placement='top'/>
      {children}
    </QueryClientProvider>
  )
}

export default AppProvider
