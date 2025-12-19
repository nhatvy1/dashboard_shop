export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  roles: string[]
  permissions: string[]
  wallet?: {
    id: string
    balance: number
    status: string
  }
}
