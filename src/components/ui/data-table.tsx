import { useMemo, useState, useCallback } from 'react'
import type { Selection, SortDescriptor } from '@heroui/react'
import { Checkbox, Table, cn } from '@heroui/react'
import { Icon } from '@iconify/react'

export type RowKey = string | number

// Chấp nhận cả id lẫn _id (MongoDB)
export type WithRowId = { id?: RowKey; _id?: RowKey }

export interface ColumnDef<T> {
  id: keyof T | string
  label: string
  sortable?: boolean
  className?: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface DataTableProps<T extends WithRowId> {
  columns: ColumnDef<T>[]
  data: T[]
  selectable?: boolean
  onSelectionChange?: (selectedRows: Partial<T>[]) => void
  selectedFields?: (keyof T)[]
  ariaLabel?: string
}

function getRowKey<T extends WithRowId>(row: T): string {
  return String(row._id ?? row.id ?? '')
}

function getNestedValue<T>(obj: T, key: string): unknown {
  return key
    .split('.')
    .reduce<unknown>(
      (acc, k) => (acc as Record<string, unknown>)?.[k],
      obj as unknown
    )
}

function pickFields<T>(row: T, fields?: (keyof T)[]): Partial<T> {
  if (!fields || fields.length === 0) return { ...row }
  return fields.reduce((acc, field) => {
    acc[field] = row[field]
    return acc
  }, {} as Partial<T>)
}

function SortableHeader({
  children,
  sortDirection
}: {
  children: React.ReactNode
  sortDirection?: 'ascending' | 'descending'
}) {
  return (
    <span className='flex items-center justify-between gap-2'>
      {children}
      {!!sortDirection && (
        <Icon
          icon='gravity-ui:chevron-up'
          className={cn(
            'size-3 transition-transform duration-100',
            sortDirection === 'descending' && 'rotate-180'
          )}
        />
      )}
    </span>
  )
}

export function DataTable<T extends WithRowId>({
  columns,
  data,
  selectable = false,
  onSelectionChange,
  selectedFields,
  ariaLabel = 'Data table'
}: DataTableProps<T>) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
  const [sortDescriptor, setSortDescriptor] = useState<
    SortDescriptor | undefined
  >(undefined)

  const sortedData = useMemo(() => {
    if (!sortDescriptor?.column) return data
    return [...data].sort((a, b) => {
      const col = sortDescriptor.column as string
      const aVal = String(getNestedValue(a, col))
      const bVal = String(getNestedValue(b, col))
      const cmp = aVal.localeCompare(bVal)
      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [data, sortDescriptor])

  const handleSelectionChange = useCallback(
    (keys: Selection) => {
      setSelectedKeys(keys)
      if (!onSelectionChange) return

      const selectedRows =
        keys === 'all'
          ? sortedData
          : sortedData.filter((row) =>
              (keys as Set<React.Key>).has(getRowKey(row))
            )

      onSelectionChange(
        selectedRows.map((row) => pickFields(row, selectedFields))
      )
    },
    [sortedData, onSelectionChange, selectedFields]
  )

  return (
    <Table variant='secondary'>
      <Table.ScrollContainer>
        <Table.Content
          aria-label={ariaLabel}
          selectedKeys={selectable ? selectedKeys : undefined}
          selectionMode={selectable ? 'multiple' : 'none'}
          sortDescriptor={sortDescriptor}
          onSelectionChange={selectable ? handleSelectionChange : undefined}
          onSortChange={setSortDescriptor}
        >
          {/* ── Header ── */}
          <Table.Header>
            {selectable && (
              <Table.Column className='w-10 pr-0'>
                <Checkbox aria-label='Select all' slot='selection'>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                </Checkbox>
              </Table.Column>
            )}
            {columns.map((col, index) => (
              <Table.Column
                key={String(col.id)}
                id={String(col.id)}
                allowsSorting={col.sortable}
                isRowHeader={index === 0}
                className={cn(
                  'font-semibold',
                  col.className
                )}
              >
                {col.sortable
                  ? ({ sortDirection }) => (
                      <SortableHeader sortDirection={sortDirection}>
                        {col.label}
                      </SortableHeader>
                    )
                  : col.label}
              </Table.Column>
            ))}
          </Table.Header>

          {/* ── Body ── */}
          <Table.Body>
            {sortedData.map((row) => (
              <Table.Row
                className='first:rounded-t-0 h-14'
                key={getRowKey(row)}
                id={getRowKey(row)}
              >
                {selectable && (
                  <Table.Cell className='pr-0'>
                    <Checkbox
                      aria-label={`Select row ${getRowKey(row)}`}
                      slot='selection'
                      variant='secondary'
                    >
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                    </Checkbox>
                  </Table.Cell>
                )}
                {columns.map((col) => {
                  const rawValue = getNestedValue(
                    row,
                    String(col.id)
                  ) as T[keyof T]
                  return (
                    <Table.Cell
                      key={String(col.id)}
                      className={`${col.className}`}
                    >
                      {col.render
                        ? col.render(rawValue, row)
                        : String(rawValue ?? '')}
                    </Table.Cell>
                  )
                })}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  )
}
