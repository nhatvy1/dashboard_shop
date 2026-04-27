// lib/query/parsers.ts
import {
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  parseAsArrayOf,
  parseAsBoolean,
} from "nuqs";

export const intParser   = parseAsInteger;
export const strParser   = parseAsString;
export const boolParser  = parseAsBoolean;
export const arrayParser = (p = parseAsString) => parseAsArrayOf(p);

export const sortOrderParser = parseAsStringLiteral(["asc", "desc"] as const);