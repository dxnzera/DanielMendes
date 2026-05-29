import { enCopy } from "./en";
import { ptCopy } from "./pt";
import type { Copy, Locale } from "./types";

export const COPIES: Record<Locale, Copy> = {
  en: enCopy,
  pt: ptCopy,
};
