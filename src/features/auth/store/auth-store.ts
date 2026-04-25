import type { User } from "../../users"

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  permissions: string[]
  wallet?: {
    id: string
    balance: number
    status: string
  }
  login: (email: string, password: string) => Promise<void>
  register: (
    email: string,
    password: string,
    firstName?: string,
    lastName?: string
  ) => Promise<void>
  logout: () => Promise<void>
  fetchProfile: () => Promise<void>
  fetchMe: () => Promise<void>
  fetchPermissions: () => Promise<void>
  setUser: (user: User | null) => void
}
