// lib/query/defaults.ts
export const DEFAULTS = {
  page:   1,
  limit:  20,
  search: "",
  sort:   "desc" as const,
} as const;