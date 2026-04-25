'use client'

import { AvatarCell, DataTable, mockUsers, type User } from '@/shared/components/data-table'
import type { Column } from '@/shared/components/data-table'

const columns: Column<User>[] = [
  {
    id: 'avatar',
    header: 'Người dùng',
    sortable: true,
    cell: ({ row }) => (
      <AvatarCell name={row.name} src={row.avatar} subtitle={row.email} />
    ),
  },
  { id: 'role', header: 'Vai trò', sortable: true },
  { id: 'status', header: 'Trạng thái', sortable: true },
  { id: 'phone', header: 'Điện thoại' },
  {
    id: 'createdAt',
    header: 'Ngày tạo',
    sortable: true,
    cell: ({ value }) => {
      const date = new Date(value as string)
      return date.toLocaleDateString('vi-VN')
    },
  },
  { id: 'actions', header: 'Thao tác' },
]

export default function UsersPage() {
  const handleView = (row: User) => {
    console.log('View user:', row)
  }

  const handleEdit = (row: User) => {
    console.log('Edit user:', row)
  }

  const handleDelete = (row: User) => {
    console.log('Delete user:', row)
  }

  return (
    <div className='p-6'>
      <div className='mb-6'>
        <h1 className='text-2xl font-semibold'>Quản lý người dùng</h1>
        <p className='text-muted-foreground'>Danh sách người dùng trong hệ thống</p>
      </div>
      <DataTable
        data={mockUsers}
        columns={columns}
        enableSelection
        enablePagination
        pageSize={5}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
