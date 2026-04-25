export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  role: string
  status: 'Active' | 'Inactive' | 'On Leave'
  phone?: string
  createdAt: string
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Kate Moore',
    email: 'kate@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=1',
    role: 'CEO',
    status: 'Active',
    phone: '+1 234 567 8901',
    createdAt: '2024-01-15T08:00:00Z',
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=2',
    role: 'CTO',
    status: 'Active',
    phone: '+1 234 567 8902',
    createdAt: '2024-01-16T09:00:00Z',
  },
  {
    id: 3,
    name: 'Sara Johnson',
    email: 'sara@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=3',
    role: 'CMO',
    status: 'On Leave',
    phone: '+1 234 567 8903',
    createdAt: '2024-01-17T10:00:00Z',
  },
  {
    id: 4,
    name: 'Michael Brown',
    email: 'michael@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=4',
    role: 'CFO',
    status: 'Active',
    phone: '+1 234 567 8904',
    createdAt: '2024-01-18T11:00:00Z',
  },
  {
    id: 5,
    name: 'Emily Davis',
    email: 'emily@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=5',
    role: 'Product Manager',
    status: 'Inactive',
    phone: '+1 234 567 8905',
    createdAt: '2024-01-19T12:00:00Z',
  },
  {
    id: 6,
    name: 'Davis Wilson',
    email: 'davis@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=6',
    role: 'Lead Designer',
    status: 'Active',
    phone: '+1 234 567 8906',
    createdAt: '2024-01-20T13:00:00Z',
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    email: 'olivia@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=7',
    role: 'Frontend Engineer',
    status: 'Active',
    phone: '+1 234 567 8907',
    createdAt: '2024-01-21T14:00:00Z',
  },
  {
    id: 8,
    name: 'James Taylor',
    email: 'james@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=8',
    role: 'Backend Engineer',
    status: 'Active',
    phone: '+1 234 567 8908',
    createdAt: '2024-01-22T15:00:00Z',
  },
  {
    id: 9,
    name: 'Sophia Anderson',
    email: 'sophia@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=9',
    role: 'QA Engineer',
    status: 'On Leave',
    phone: '+1 234 567 8909',
    createdAt: '2024-01-23T16:00:00Z',
  },
  {
    id: 10,
    name: 'Liam Thomas',
    email: 'liam@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=10',
    role: 'DevOps Engineer',
    status: 'Active',
    phone: '+1 234 567 8910',
    createdAt: '2024-01-24T17:00:00Z',
  },
  {
    id: 11,
    name: 'Emma Johnson',
    email: 'emma@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=11',
    role: 'Marketing Manager',
    status: 'Active',
    phone: '+1 234 567 8911',
    createdAt: '2024-01-25T18:00:00Z',
  },
  {
    id: 12,
    name: 'Noah Davis',
    email: 'noah@acme.com',
    avatar: 'https://i.pravatar.cc/150?u=12',
    role: 'Data Analyst',
    status: 'Inactive',
    phone: '+1 234 567 8912',
    createdAt: '2024-01-26T19:00:00Z',
  },
]

export const statusColors: Record<User['status'], 'success' | 'danger' | 'warning'> = {
  Active: 'success',
  Inactive: 'danger',
  'On Leave': 'warning',
}
