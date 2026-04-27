import { Pagination, Select, Label, ListBox } from '@heroui/react'
import { useCallback, memo } from 'react'
import { Icon } from '@iconify/react'
import { useQueryParams } from '@/shared/hooks/use-query-params'

interface PaginationProps {
  total: number
  totalPages: number
  onPageChange?: (page: number) => void
  onLimitChange?: (limit: number) => void
  limitOptions?: number[]
  className?: string
}

const DEFAULT_LIMIT_OPTIONS = [10, 20, 50, 100]

function PaginationWithSelectComponent({
  totalPages,
  onPageChange,
  onLimitChange,
  limitOptions = DEFAULT_LIMIT_OPTIONS,
  className
}: PaginationProps) {
  const { getQueryParamAs, pushQueryParams } = useQueryParams()

  const page = getQueryParamAs('page', Number, 1)
  const limit = getQueryParamAs('limit', Number, 20)

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (onPageChange) {
        onPageChange(newPage)
      } else {
        pushQueryParams({ page: newPage }, { replace: true })
      }
    },
    [onPageChange, pushQueryParams]
  )

  const handleLimitChange = useCallback(
    (newLimit: number) => {
      if (onLimitChange) {
        onLimitChange(newLimit)
      } else {
        pushQueryParams({ limit: newLimit, page: 1 }, { replace: true })
      }
    },
    [onLimitChange, pushQueryParams]
  )

  const getPageNumbers = useCallback(() => {
    const pages: (number | 'ellipsis')[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (page > 3) {
        pages.push('ellipsis')
      }
      const start = Math.max(2, page - 1)
      const end = Math.min(totalPages - 1, page + 1)
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      if (page < totalPages - 2) {
        pages.push('ellipsis')
      }
      pages.push(totalPages)
    }
    return pages
  }, [page, totalPages])

  // const startItem = (currentPage - 1) * currentLimit + 1
  // const endItem = Math.min(currentPage * currentLimit, total)

  return (
    <div
      className={`mt-5 flex items-center justify-between ${className ?? ''}`}
    >
      <div className=''>
        <Label className='text-small text-muted hidden'>Hiển thị</Label>
        <Select
          className='w-24'
          variant='secondary'
          value={String(limit)}
          onChange={(value) => handleLimitChange(Number(value))}
        >
          <Select.Trigger className='flex items-center'>
            <Select.Value />
            <Icon icon='solar:alt-arrow-down-linear' />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {limitOptions.map((option) => (
                <ListBox.Item
                  key={String(option)}
                  id={String(option)}
                  textValue={String(option)}
                >
                  {option}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
      <Pagination className='w-fit justify-center'>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={page === 1}
                onPress={() => handlePageChange(page - 1)}
              >
                <Pagination.PreviousIcon />
              </Pagination.Previous>
            </Pagination.Item>
          </Pagination.Item>
          {getPageNumbers().map((p, i) =>
            p === 'ellipsis' ? (
              <Pagination.Item key={`ellipsis-${i}`}>
                <Pagination.Ellipsis />
              </Pagination.Item>
            ) : (
              <Pagination.Item key={p}>
                <Pagination.Link
                  isActive={p === page}
                  onPress={() => handlePageChange(p)}
                  className={`rounded-md ${p === page ? 'bg-[#0070ee] text-white!' : 'bg-[#f4f4f5]'} text-black`}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            )
          )}
          <Pagination.Item>
            <Pagination.Next
              isDisabled={page === totalPages}
              onPress={() => handlePageChange(page + 1)}
            >
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  )
}

export const PaginationWithSelect = memo(PaginationWithSelectComponent)
