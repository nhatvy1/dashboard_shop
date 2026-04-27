import { Pagination, Select, Label, ListBox } from '@heroui/react'
import { useSearchParams } from 'react-router'
import { useCallback, memo } from 'react'
import { Icon } from '@iconify/react'

interface PaginationProps {
  page?: string
  limit?: string
  total: number
  onPageChange?: (page: number) => void
  onLimitChange?: (limit: number) => void
  limitOptions?: number[]
  className?: string
}

const DEFAULT_LIMIT_OPTIONS = [10, 20, 50, 100]

function PaginationWithSelectComponent({
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
  limitOptions = DEFAULT_LIMIT_OPTIONS,
  className
}: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = page ? parseInt(page, 10) : 1
  const currentLimit = limit ? parseInt(limit, 10) : limitOptions[0]
  const totalPages = Math.ceil(total / currentLimit)

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (onPageChange) {
        onPageChange(newPage)
      } else {
        const params = new URLSearchParams(searchParams)
        params.set('page', String(newPage))
        setSearchParams(params, { preventScrollReset: true })
      }
    },
    [onPageChange, searchParams, setSearchParams]
  )

  const handleLimitChange = useCallback(
    (newLimit: number) => {
      if (onLimitChange) {
        onLimitChange(newLimit)
      } else {
        const params = new URLSearchParams(searchParams)
        params.set('limit', String(newLimit))
        params.set('page', '1')
        setSearchParams(params, { preventScrollReset: true })
      }
    },
    [onLimitChange, searchParams, setSearchParams]
  )

  const getPageNumbers = useCallback(() => {
    const pages: (number | 'ellipsis')[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (currentPage > 3) {
        pages.push('ellipsis')
      }
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      if (currentPage < totalPages - 2) {
        pages.push('ellipsis')
      }
      pages.push(totalPages)
    }
    return pages
  }, [currentPage, totalPages])

  // const startItem = (currentPage - 1) * currentLimit + 1
  // const endItem = Math.min(currentPage * currentLimit, total)

  return (
    <div className={`flex items-center justify-between mt-5 ${className ?? ''}`}>
      <div className=''>
        <Label className='text-small text-muted hidden'>Hiển thị</Label>
        <Select
          className='w-24'
          variant='secondary'
          value={String(currentLimit)}
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
      <Pagination className='justify-center w-fit'>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Item>
              <Pagination.Previous
                onPress={() => handlePageChange(currentPage - 1)}
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
                  isActive={p === currentPage}
                  onPress={() => handlePageChange(p)}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            )
          )}
          <Pagination.Item>
            <Pagination.Next onPress={() => {}}>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  )
}

export const PaginationWithSelect = memo(PaginationWithSelectComponent)
