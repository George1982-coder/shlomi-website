/**
 * Pricing Calculation Engine
 * 
 * Pure functions for calculating product prices.
 * Separated from UI components for testability and reusability.
 * 
 * Future enhancements:
 * - Integration with real-time pricing API
 * - Support for promotions and discounts
 * - Complex pricing rules (volume discounts, etc.)
 * - Currency conversion
 */

import {
  BASE_BOARD_PRICE_PER_SQM,
  EDGE_BANDING_PRICE_PER_METER,
  getMaterialModifier,
  getBoardTypeModifier,
  calculateEdgeBandingLength,
  PRICING_CONSTRAINTS,
} from '@/data/pricingConfig';

/**
 * Input parameters for board pricing calculation
 */
export interface BoardPricingInput {
  widthCm: number;
  lengthCm: number;
  boardTypeId?: string;
  materialId?: string;
  edgeBandingId?: string;
}

/**
 * Result of board pricing calculation
 */
export interface BoardPricingResult {
  /** Price per single unit in ILS */
  unitPrice: number;
  
  /** Calculated area in square meters */
  areaSqM: number;
  
  /** Breakdown for transparency */
  breakdown: {
    basePrice: number;
    materialModifier: number;
    boardTypeModifier: number;
    edgeBandingCost: number;
    edgeBandingLength: number;
  };
}

/**
 * Calculate price for a custom-cut board
 * 
 * Formula:
 * Base Price = Area (m²) × Base Rate × Material Modifier × Board Type Modifier
 * Edge Banding Cost = Edge Length (m) × Edge Rate
 * Total = Base Price + Edge Banding Cost
 * 
 * @param input - Board configuration parameters
 * @returns Pricing result with breakdown
 */
export function calculateBoardItemPrice(
  input: BoardPricingInput
): BoardPricingResult {
  // Validate inputs
  if (input.widthCm <= 0 || input.lengthCm <= 0) {
    throw new Error('Width and length must be positive numbers');
  }
  
  // Calculate area in square meters
  const areaSqM = (input.widthCm * input.lengthCm) / 10000;
  
  // Validate area constraints
  if (areaSqM < PRICING_CONSTRAINTS.minAreaSqM) {
    throw new Error(`Area too small. Minimum: ${PRICING_CONSTRAINTS.minAreaSqM} m²`);
  }
  
  if (areaSqM > PRICING_CONSTRAINTS.maxAreaSqM) {
    throw new Error(`Area too large. Maximum: ${PRICING_CONSTRAINTS.maxAreaSqM} m²`);
  }
  
  // Get modifiers
  const materialModifier = getMaterialModifier(input.materialId);
  const boardTypeModifier = getBoardTypeModifier(input.boardTypeId);
  
  // Calculate base price
  const basePrice = areaSqM * BASE_BOARD_PRICE_PER_SQM * materialModifier * boardTypeModifier;
  
  // Calculate edge banding cost
  const edgeBandingLength = calculateEdgeBandingLength(
    input.widthCm,
    input.lengthCm,
    input.edgeBandingId
  );
  const edgeBandingCost = edgeBandingLength * EDGE_BANDING_PRICE_PER_METER;
  
  // Calculate final unit price
  const unitPrice = Math.round(basePrice + edgeBandingCost);
  
  return {
    unitPrice,
    areaSqM: Math.round(areaSqM * 10000) / 10000, // Round to 4 decimal places
    breakdown: {
      basePrice: Math.round(basePrice),
      materialModifier,
      boardTypeModifier,
      edgeBandingCost: Math.round(edgeBandingCost),
      edgeBandingLength: Math.round(edgeBandingLength * 100) / 100, // Round to 2 decimals
    },
  };
}

/**
 * Format price for display
 * 
 * @param price - Price in ILS
 * @param showCurrency - Whether to show currency symbol
 * @returns Formatted price string
 */
export function formatPrice(price: number, showCurrency: boolean = true): string {
  const formatted = price.toLocaleString('he-IL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return showCurrency ? `₪${formatted}` : formatted;
}

/**
 * Validate if a price meets minimum order requirements
 * 
 * @param price - Total order price
 * @returns Validation result
 */
export function validateMinimumOrder(price: number): {
  isValid: boolean;
  message?: string;
} {
  if (price < PRICING_CONSTRAINTS.minOrderValue) {
    return {
      isValid: false,
      message: `מינימום הזמנה: ${formatPrice(PRICING_CONSTRAINTS.minOrderValue)}`,
    };
  }
  
  return { isValid: true };
}

