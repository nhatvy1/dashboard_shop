import { QueryClient } from '@tanstack/react-query'

const queryClientConfig = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})

export default queryClientConfig
