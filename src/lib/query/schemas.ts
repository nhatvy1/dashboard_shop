// lib/query/schemas.ts
import { arrayParser, intParser, sortOrderParser, strParser } from "./parser";
import { DEFAULTS } from "./default";


export const paginationSchema = {
  page:  intParser.withDefault(DEFAULTS.page),
  limit: intParser.withDefault(DEFAULTS.limit),
};

export const filterSchema = {
  search: strParser.withDefault(DEFAULTS.search),
  status: strParser.withDefault(""),
  tags:   arrayParser().withDefault([]),
};

export const sortSchema = {
  sortBy: strParser.withDefault("createdAt"),
  order:  sortOrderParser.withDefault(DEFAULTS.sort),
};

// Gộp lại nếu cần toàn bộ
export const dashboardSchema = {
  ...paginationSchema,
  ...filterSchema,
  ...sortSchema,
};