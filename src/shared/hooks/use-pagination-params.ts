import { useSearchParams } from 'react-router'
import { useCallback } from 'react'

interface UsePaginationParamsOptions {
  defaultPage?: number
  defaultLimit?: number
  limitOptions?: number[]
}

interface UsePaginationParamsResult {
  page: number
  limit: number
  setPage: (page: number) => void
  setLimit: (limit: number) => void
  setPageAndReset: (limit: number) => void
}

export function usePaginationParams(
  options: UsePaginationParamsOptions = {}
): UsePaginationParamsResult {
  const { defaultPage = 1, defaultLimit = 10 } = options
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get('page') ? parseInt(searchParams.get('page')!, 10) : defaultPage
  const limit = searchParams.get('limit')
    ? parseInt(searchParams.get('limit')!, 10)
    : defaultLimit

  const setPage = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams)
      params.set('page', String(newPage))
      setSearchParams(params, { preventScrollReset: true })
    },
    [searchParams, setSearchParams]
  )

  const setLimit = useCallback(
    (newLimit: number) => {
      const params = new URLSearchParams(searchParams)
      params.set('limit', String(newLimit))
      params.set('page', '1')
      setSearchParams(params, { preventScrollReset: true })
    },
    [searchParams, setSearchParams]
  )

  const setPageAndReset = useCallback(
    (newLimit: number) => {
      const params = new URLSearchParams(searchParams)
      params.set('limit', String(newLimit))
      params.set('page', '1')
      setSearchParams(params, { preventScrollReset: true })
    },
    [searchParams, setSearchParams]
  )

  return {
    page,
    limit,
    setPage,
    setLimit,
    setPageAndReset
  }
}

export const DEFAULT_LIMIT_OPTIONS = [10, 20, 50, 100]
