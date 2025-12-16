/**
 * Grow Payment Integration
 * 
 * Utility functions for generating secure payment links via Grow.link
 */

import { CartItem } from '@/types/cart';

/**
 * Grow Business Configuration
 */
const GROW_BUSINESS_ID = '073b14ee401507b2746687163d859c64-MjQ3Mjc2NQ';
const GROW_BASE_URL = 'https://pay.grow.link';

/**
 * Generate a unique order ID
 * Format: ORDER-YYYYMMDD-HHMMSS-RANDOM
 */
export function generateOrderId(): string {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const time = now.toTimeString().slice(0, 8).replace(/:/g, '');
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ORDER-${date}-${time}-${random}`;
}

/**
 * Format cart items into a readable description
 */
export function formatCartDescription(items: CartItem[]): string {
  const itemDescriptions = items.map((item, index) => {
    const parts = [
      `${index + 1}. ${item.name}`,
      `כמות: ${item.quantity}`,
      `מחיר: ₪${item.unitPrice}`,
    ];

    // Add configuration details if available
    if (item.configuration) {
      const config = item.configuration as any;
      
      if (config.widthCm && config.lengthCm) {
        parts.push(`מידות: ${config.widthCm}x${config.lengthCm} ס"מ`);
      }
      
      if (config.materialName) {
        parts.push(`חומר: ${config.materialName}`);
      }
      
      if (config.colorName) {
        parts.push(`צבע: ${config.colorName}`);
      }
      
      if (config.edgeBandingName) {
        parts.push(`קנטים: ${config.edgeBandingName}`);
      }
    }

    return parts.join(' | ');
  }).join(' || ');

  return itemDescriptions;
}

/**
 * Generate Grow payment link for cart checkout
 */
export function generateGrowCheckoutLink(
  items: CartItem[],
  totalAmount: number,
  orderId?: string
): string {
  // Generate order ID if not provided
  const finalOrderId = orderId || generateOrderId();
  
  // Format description
  const description = formatCartDescription(items);
  
  // Encode description for URL
  const encodedDescription = encodeURIComponent(description);
  
  // Build payment URL
  const paymentUrl = `${GROW_BASE_URL}/${GROW_BUSINESS_ID}/${totalAmount}/${finalOrderId}?description=${encodedDescription}`;
  
  return paymentUrl;
}

/**
 * Generate Grow payment link for a single product
 */
export function generateGrowProductLink(
  productId: string,
  price: number,
  productName: string,
  description?: string
): string {
  const fullDescription = description 
    ? `${productName} | ${description}`
    : productName;
  
  const encodedDescription = encodeURIComponent(fullDescription);
  
  return `${GROW_BASE_URL}/${GROW_BUSINESS_ID}/${price}/${productId}?description=${encodedDescription}`;
}

/**
 * Validate payment amount (must be positive)
 */
export function isValidPaymentAmount(amount: number): boolean {
  return amount > 0 && Number.isFinite(amount);
}

/**
 * Format amount for Grow (round to whole number)
 */
export function formatGrowAmount(amount: number): number {
  return Math.round(amount);
}

