'use client'

import type { Selection } from '@heroui/react'
import type { SortingState } from '@tanstack/react-table'

import {
  Avatar,
  Button,
  Checkbox,
  Chip,
  Pagination,
  Skeleton,
  Table as HeroUITable,
} from '@heroui/react'
import { Icon } from '@iconify/react'
import {
  type ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

// ============ Types ============
export interface Column<T> {
  id: keyof T | string
  header: string
  accessorKey?: keyof T
  cell?: (props: { row: T; value: unknown }) => React.ReactNode
  sortable?: boolean
}

export interface TableProps<T extends { id: string | number }> {
  data: T[]
  columns: Column<T>[]
  enableSelection?: boolean
  enablePagination?: boolean
  pageSize?: number
  totalItems?: number
  onSelectionChange?: (selectedKeys: Set<string | number>) => void
  onPageChange?: (page: number) => void
  onSortChange?: (sorting: SortingState) => void
  onDelete?: (row: T) => void
  onEdit?: (row: T) => void
  onView?: (row: T) => void
  isLoading?: boolean
  emptyText?: string
  getRowId?: (row: T) => string | number
}

// ============ Status Chip ============
export function StatusChip({ status }: { status: string }) {
  const colorMap: Record<string, 'success' | 'danger' | 'warning'> = {
    Active: 'success',
    Inactive: 'danger',
    'On Leave': 'warning',
    Published: 'success',
    Draft: 'danger',
    Pending: 'warning',
  }
  const color = colorMap[status] || 'primary'
  return (
    <Chip color={color} size='sm' variant='soft'>
      {status}
    </Chip>
  )
}

// ============ Avatar Cell ============
export function AvatarCell({
  name,
  src,
  subtitle,
}: {
  name: string
  src?: string
  subtitle?: string
}) {
  return (
    <div className='flex items-center gap-3'>
      <Avatar size='sm' src={src}>
        {name?.split(' ').map((n) => n[0]).join('') || '?'}
      </Avatar>
      <div className='flex flex-col'>
        <span className='text-sm'>{name}</span>
        {subtitle && <span className='text-xs text-muted-foreground'>{subtitle}</span>}
      </div>
    </div>
  )
}

// ============ Action Buttons ============
export function ActionButtons({
  onView,
  onEdit,
  onDelete,
  row,
  onViewRow,
  onEditRow,
  onDeleteRow,
}: {
  onView?: () => void
  onEdit?: () => void
  onDelete?: () => void
  row?: unknown
  onViewRow?: (row: unknown) => void
  onEditRow?: (row: unknown) => void
  onDeleteRow?: (row: unknown) => void
}) {
  const handleView = () => onViewRow?.(row)
  const handleEdit = () => onEditRow?.(row)
  const handleDelete = () => onDeleteRow?.(row)

  return (
    <div className='flex items-center gap-1'>
      {onViewRow && (
        <Button isIconOnly size='sm' variant='tertiary' onPress={handleView}>
          <Icon className='size-4' icon='gravity-ui:eye' />
        </Button>
      )}
      {onEditRow && (
        <Button isIconOnly size='sm' variant='tertiary' onPress={handleEdit}>
          <Icon className='size-4' icon='gravity-ui:pencil' />
        </Button>
      )}
      {onDeleteRow && (
        <Button isIconOnly size='sm' variant='danger-soft' onPress={handleDelete}>
          <Icon className='size-4' icon='gravity-ui:trash-bin' />
        </Button>
      )}
    </div>
  )
}

// ============ Loading Skeleton ============
function LoadingSkeleton({ rows = 5, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <HeroUITable.Row key={i}>
          {Array.from({ length: cols }).map((_, j) => (
            <HeroUITable.Cell key={j}>
              <Skeleton className='h-4 w-full rounded' />
            </HeroUITable.Cell>
          ))}
        </HeroUITable.Row>
      ))}
    </>
  )
}

// ============ Empty State ============
function EmptyState({ text = 'Không có dữ liệu' }: { text?: string }) {
  return (
    <div className='flex h-48 w-full flex-col items-center justify-center gap-2 text-center'>
      <Icon className='size-10 text-muted-foreground' icon='gravity-ui:tray' />
      <span className='text-sm text-muted-foreground'>{text}</span>
    </div>
  )
}

// ============ Main DataTable Component ============
export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  enableSelection = false,
  enablePagination = true,
  pageSize: initialPageSize = 10,
  totalItems,
  onSelectionChange,
  onPageChange,
  onSortChange,
  onViewRow,
  onEditRow,
  onDeleteRow,
  isLoading = false,
  emptyText = 'Không có dữ liệu',
  getRowId,
}: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
  const [pageIndex, setPageIndex] = useState(0)

  const columnHelper = createColumnHelper<T>()

  // Build columns dynamically
  const tableColumns: ColumnDef<T, unknown>[] = columns.map((col) =>
    columnHelper.accessor(col.id as keyof T, {
      header: col.header,
      cell: (info) => {
        const value = info.getValue()
        // Avatar column
        if (col.id === 'avatar') {
          const val = value as { name: string; src?: string; subtitle?: string }
          return <AvatarCell name={val.name} src={val.src} subtitle={val.subtitle} />
        }
        // Status column
        if (col.id === 'status' || String(col.id).toLowerCase().includes('status')) {
          return <StatusChip status={String(value)} />
        }
        // Actions column
        if (col.id === 'actions' || col.header === 'Thao tác') {
          return (
            <ActionButtons
              row={info.row.original}
              onViewRow={onViewRow}
              onEditRow={onEditRow}
              onDeleteRow={onDeleteRow}
            />
          )
        }
        // Custom cell
        if (col.cell) {
          return col.cell({ row: info.row.original, value })
        }
        return String(value ?? '')
      },
      enableSorting: col.sortable,
    })
  )

  // Add selection column if enabled
  if (enableSelection) {
    tableColumns.unshift(
      columnHelper.display({
        id: 'select',
        header: () => null,
        cell: () => null,
      }) as ColumnDef<T, unknown>
    )
  }

  const table = useReactTable({
    columns: tableColumns,
    data,
    enableRowSelection: enableSelection,
    onRowSelectionChange: (updater) => {
      const newSelection = typeof updater === 'function' ? updater(selectedKeys) : updater
      setSelectedKeys(newSelection)
      onSelectionChange?.(new Set(newSelection))
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
    onSortingChange: (updater) => {
      const newSorting = typeof updater === 'function' ? updater(sorting) : updater
      setSorting(newSorting)
      onSortChange?.(newSorting)
    },
    state: {
      sorting,
      rowSelection: enableSelection
        ? Object.fromEntries([...selectedKeys].map((k) => [String(k), true]))
        : {},
      pagination: enablePagination ? { pageIndex, pageSize: initialPageSize } : undefined,
    },
    pageCount: enablePagination ? Math.ceil((totalItems || data.length) / initialPageSize) : undefined,
    getRowId: getRowId ?? ((row) => String(row.id)),
    initialState: {
      pagination: enablePagination ? { pageSize: initialPageSize } : undefined,
    },
  })

  const sortDescriptor = sorting[0]
    ? { column: sorting[0].id, direction: sorting[0].desc ? 'descending' : 'ascending' }
    : undefined

  const handlePageChange = (newPage: number) => {
    const newPageIndex = newPage - 1
    setPageIndex(newPageIndex)
    onPageChange?.(newPageIndex)
  }

  const total = totalItems || data.length
  const pageCount = Math.ceil(total / initialPageSize)
  const currentPage = pageIndex + 1
  const start = pageIndex * initialPageSize + 1
  const end = Math.min((pageIndex + 1) * initialPageSize, total)
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  return (
    <HeroUITable>
      <HeroUITable.ScrollContainer>
        <HeroUITable.Content
          aria-label='Data table'
          className='min-w-[800px]'
          sortDescriptor={sortDescriptor}
          onSortChange={(descriptor) => {
            if (!descriptor) {
              setSorting([])
              onSortChange?.([])
              return
            }
            const newSorting: SortingState = [
              { id: descriptor.column as string, desc: descriptor.direction === 'descending' },
            ]
            setSorting(newSorting)
            onSortChange?.(newSorting)
          }}
        >
          <HeroUITable.Header>
            {table.getHeaderGroups()[0]?.headers.map((header) => (
              <HeroUITable.Column
                key={header.id}
                id={header.id}
                allowsSorting={header.column.getCanSort()}
                isRowHeader={header.id === 'name'}
              >
                {({ sortDirection }) => (
                  <span className='flex items-center gap-1'>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {sortDirection && (
                      <Icon
                        icon='gravity-ui:chevron-up'
                        className={`size-3 transform transition-transform ${
                          sortDirection === 'descending' ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </span>
                )}
              </HeroUITable.Column>
            ))}
          </HeroUITable.Header>
          <HeroUITable.Body>
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              table.getRowModel().rows.map((row) => (
                <HeroUITable.Row key={row.id} id={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <HeroUITable.Cell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </HeroUITable.Cell>
                  ))}
                </HeroUITable.Row>
              ))
            )}
          </HeroUITable.Body>
          {!isLoading && data.length === 0 && (
            <HeroUITable.Body>
              <HeroUITable.Row>
                <HeroUITable.Cell>
                  <EmptyState text={emptyText} />
                </HeroUITable.Cell>
              </HeroUITable.Row>
            </HeroUITable.Body>
          )}
        </HeroUITable.Content>
      </HeroUITable.ScrollContainer>
      {enablePagination && pageCount > 1 && (
        <HeroUITable.Footer>
          <Pagination size='sm'>
            <Pagination.Summary>
              {start} đến {end} của {total} kết quả
            </Pagination.Summary>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={pageIndex === 0}
                  onPress={() => handlePageChange(currentPage - 1)}
                >
                  <Pagination.PreviousIcon />
                  Trước
                </Pagination.Previous>
              </Pagination.Item>
              {pages.map((p) => (
                <Pagination.Item key={p}>
                  <Pagination.Link isActive={p === currentPage} onPress={() => handlePageChange(p)}>
                    {p}
                  </Pagination.Link>
                </Pagination.Item>
              ))}
              <Pagination.Item>
                <Pagination.Next
                  isDisabled={pageIndex >= pageCount - 1}
                  onPress={() => handlePageChange(currentPage + 1)}
                >
                  Sau
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </HeroUITable.Footer>
      )}
    </HeroUITable>
  )
}

export type { Column }
