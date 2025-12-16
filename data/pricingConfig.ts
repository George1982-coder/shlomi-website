/**
 * Pricing Configuration
 * 
 * Centralized pricing constants and modifiers.
 * This is a placeholder structure that will be replaced with
 * database-driven pricing in production.
 * 
 * Future: These values will come from an admin dashboard and API.
 */

/**
 * Base price per square meter for standard board
 * Unit: ILS per m²
 */
export const BASE_BOARD_PRICE_PER_SQM = 120;

/**
 * Material type price modifiers
 * Key: materialId from boardsData.ts
 * Value: multiplier (1.0 = no change, 1.2 = 20% increase)
 * 
 * Future: This will be fetched from database with actual material IDs
 */
export const MATERIAL_PRICE_MODIFIERS: Record<string, number> = {
  'mdf-raw': 1.0,
  'mdf-melamine': 1.2,
  'osb': 0.85,
  'plywood': 1.4,
  // Add more as materials are defined
};

/**
 * Board type price modifiers
 * Some board types may have inherent price differences
 */
export const BOARD_TYPE_MODIFIERS: Record<string, number> = {
  'melamine-standard': 1.0,
  'mdf-coated': 1.1,
  'solid-wood': 1.8,
};

/**
 * Edge banding pricing
 * Base price per linear meter of edge banding
 * Unit: ILS per meter
 * 
 * Future: Different edge banding types will have different prices
 */
export const EDGE_BANDING_PRICE_PER_METER = 8;

/**
 * Edge banding configuration modifiers
 * Based on which edges are banded
 */
export const EDGE_BANDING_MODIFIERS: Record<string, number> = {
  'none': 0,
  'long-sides': 1.0, // standard rate
  'short-sides': 1.0,
  'all-around': 1.0,
};

/**
 * Minimum order values and constraints
 */
export const PRICING_CONSTRAINTS = {
  /** Minimum area in m² for an order */
  minAreaSqM: 0.01,
  
  /** Maximum area in m² for an order */
  maxAreaSqM: 6.0, // 240cm x 250cm roughly
  
  /** Minimum order value in ILS */
  minOrderValue: 50,
  
  /** Small order surcharge threshold */
  smallOrderThreshold: 100,
  
  /** Surcharge for orders below threshold */
  smallOrderSurcharge: 20,
};

/**
 * Helper to get material modifier with fallback
 */
export function getMaterialModifier(materialId: string | undefined): number {
  if (!materialId) return 1.0;
  return MATERIAL_PRICE_MODIFIERS[materialId] ?? 1.0;
}

/**
 * Helper to get board type modifier with fallback
 */
export function getBoardTypeModifier(boardTypeId: string | undefined): number {
  if (!boardTypeId) return 1.0;
  return BOARD_TYPE_MODIFIERS[boardTypeId] ?? 1.0;
}

/**
 * Calculate edge banding length based on dimensions and configuration
 */
export function calculateEdgeBandingLength(
  widthCm: number,
  lengthCm: number,
  edgeBandingId: string | undefined
): number {
  if (!edgeBandingId || edgeBandingId === 'none') return 0;
  
  // Convert cm to meters
  const widthM = widthCm / 100;
  const lengthM = lengthCm / 100;
  
  switch (edgeBandingId) {
    case 'long-sides':
      return lengthM * 2;
    case 'short-sides':
      return widthM * 2;
    case 'all-around':
      return (widthM + lengthM) * 2;
    default:
      return 0;
  }
}

