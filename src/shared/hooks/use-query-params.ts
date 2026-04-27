import queryString from "query-string"
import { useCallback } from "react"
import { useLocation, useNavigate } from "react-router"

const QS_OPTIONS: queryString.ParseOptions & queryString.StringifyOptions = {
  arrayFormat: "bracket",
  skipNull: true,
  skipEmptyString: true,
}

interface PushQueryOptions {
  keepExisting?: boolean
  replace?: boolean
}

type RawValue = string | number | boolean | null | undefined
type QueryParams = Record<string, RawValue | RawValue[]>

export const useQueryParams = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const getQueryParams = useCallback((): queryString.ParsedQuery => {
    return queryString.parse(location.search, QS_OPTIONS)
  }, [location.search])

  const getQueryParam = useCallback(
    (key: string): string | null => {
      const val = getQueryParams()[key]
      if (Array.isArray(val)) return val[0] ?? null
      return (val as string) ?? null
    },
    [getQueryParams]
  )

  const getQueryParamAs = useCallback(
    <T>(key: string, parser: (v: string) => T, fallback: T): T => {
      const val = getQueryParam(key)
      try {
        return val !== null ? parser(val) : fallback
      } catch {
        return fallback
      }
    },
    [getQueryParam]
  )

  const pushQueryParams = useCallback(
    (
      newParams: QueryParams | ((current: queryString.ParsedQuery) => QueryParams),
      options: PushQueryOptions = {}
    ) => {
      const { keepExisting = true, replace = false } = options
      const existingParams = queryString.parse(location.search, QS_OPTIONS)

      const resolved =
        typeof newParams === "function" ? newParams(existingParams) : newParams

      const merged = keepExisting
        ? { ...existingParams, ...resolved }
        : resolved

      const qs = queryString.stringify(merged, QS_OPTIONS)
      navigate(`${location.pathname}${qs ? `?${qs}` : ""}`, { replace })
    },
    [location.search, location.pathname, navigate]
  )

  const removeQueryParams = useCallback(
    (keys: string | string[], options: Pick<PushQueryOptions, "replace"> = {}) => {
      const keysArr = Array.isArray(keys) ? keys : [keys]
      const existing = queryString.parse(location.search, QS_OPTIONS)
      keysArr.forEach(k => delete existing[k])
      const qs = queryString.stringify(existing, QS_OPTIONS)
      navigate(`${location.pathname}${qs ? `?${qs}` : ""}`, options)
    },
    [location.search, location.pathname, navigate]
  )

  const clearQueryParams = useCallback(
    (options: Pick<PushQueryOptions, "replace"> = {}) => {
      navigate(location.pathname, options)
    },
    [location.pathname, navigate]
  )

  const setQueryParam = useCallback(
    (key: string, value: RawValue, options: PushQueryOptions = {}) => {
      pushQueryParams({ [key]: value }, options)
    },
    [pushQueryParams]
  )

  return {
    getQueryParams,
    getQueryParam,
    getQueryParamAs, // ← thêm
    pushQueryParams,
    removeQueryParams,
    clearQueryParams,
    setQueryParam,
  }
}