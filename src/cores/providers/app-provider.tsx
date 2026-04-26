import queryClientConfig from "@/shared/configs/query-client-config"
import { QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"

const AppProvider = ({ children }: { children: ReactNode })=> {
  return (
    <QueryClientProvider client={queryClientConfig}>
      {children}
    </QueryClientProvider>
  )
}

export default AppProvider