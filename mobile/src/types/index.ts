/** Shared domain types for Local Bulgarian Tour. */

/** A tour offered in the app. Extend as the data model is defined. */
export interface Tour {
  id: string;
  title: string;
  description: string;
  /** Human-readable location, e.g. "Plovdiv". */
  location: string;
  /** GPS coordinates, when available. */
  latitude?: number;
  longitude?: number;
  /** ISO 8601 duration, e.g. "PT2H". */
  duration: string;
  priceBgn: number;
  tags: string[];
}

export type TourId = Tour['id'];
