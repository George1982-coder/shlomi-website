/**
 * Cart Utility Functions
 * 
 * Helper functions for cart operations and comparisons.
 * Separated from the context for reusability and testing.
 */

import { CartItem, CartItemInput, ProductConfiguration } from '@/types/cart';

/**
 * Generate a unique ID for a cart item
 * In production, this might come from the backend
 */
export function generateCartItemId(): string {
  return `cart-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if two product configurations are identical
 * Used to determine if we should increment quantity or add a new line
 * 
 * @param config1 - First configuration
 * @param config2 - Second configuration
 * @returns true if configurations are identical
 */
export function areConfigurationsEqual(
  config1: ProductConfiguration | undefined,
  config2: ProductConfiguration | undefined
): boolean {
  // Both undefined or null
  if (!config1 && !config2) return true;
  
  // One is undefined, other isn't
  if (!config1 || !config2) return false;
  
  // Compare JSON strings (works for simple objects)
  // In production, might want more sophisticated comparison
  return JSON.stringify(config1) === JSON.stringify(config2);
}

/**
 * Check if a cart item input matches an existing cart item
 * Used to find similar items before adding to cart
 * 
 * @param item - New item being added
 * @param existingItem - Existing cart item
 * @returns true if items are the same product with same configuration
 */
export function areItemsSimilar(
  item: CartItemInput,
  existingItem: CartItem
): boolean {
  // Must be same product
  if (item.productId !== existingItem.productId) return false;
  
  // Must have same configuration
  return areConfigurationsEqual(item.configuration, existingItem.configuration);
}

/**
 * Calculate total price for a cart item
 * 
 * @param unitPrice - Price per unit
 * @param quantity - Number of units
 * @returns Total price
 */
export function calculateItemTotal(unitPrice: number, quantity: number): number {
  return Math.round(unitPrice * quantity);
}

/**
 * Format configuration for display
 * Creates a human-readable summary of product configuration
 * 
 * @param config - Product configuration
 * @returns Array of formatted strings
 */
export function formatConfigurationSummary(
  config: ProductConfiguration | undefined
): string[] {
  if (!config) return [];
  
  const summary: string[] = [];
  
  // Handle board configuration
  if ('widthCm' in config && 'lengthCm' in config) {
    summary.push(`מידות: ${config.widthCm} × ${config.lengthCm} ס"מ`);
    
    if (config.areaSqM) {
      summary.push(`שטח: ${config.areaSqM.toFixed(2)} מ"ר`);
    }
    
    if (config.materialName) {
      summary.push(`חומר: ${config.materialName}`);
    }
    
    if (config.boardTypeName) {
      summary.push(`סוג: ${config.boardTypeName}`);
    }
    
    if (config.colorName) {
      summary.push(`גוון: ${config.colorName}`);
    }
    
    if (config.edgeBandingName) {
      summary.push(`קנט: ${config.edgeBandingName}`);
    }
  }
  
  return summary;
}

/**
 * Validate cart item quantity
 * 
 * @param quantity - Requested quantity
 * @returns Validated quantity (clamped to valid range)
 */
export function validateQuantity(quantity: number): number {
  // Minimum quantity is 1
  if (quantity < 1) return 1;
  
  // Maximum quantity (can be configured)
  const MAX_QUANTITY = 999;
  if (quantity > MAX_QUANTITY) return MAX_QUANTITY;
  
  // Round to integer
  return Math.floor(quantity);
}

