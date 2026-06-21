import { en, type Dictionary } from "./en";
import { ka } from "./ka";

export type Locale = "ka" | "en";

export const DICTIONARIES: Record<Locale, Dictionary> = { ka, en };

export const DEFAULT_LOCALE: Locale = "ka";

export type { Dictionary };
