/**
 * Cart System Type Definitions
 * 
 * These types define the structure of cart items and cart state.
 * Designed to support multiple product types and future backend integration.
 */

/**
 * Configuration object for a custom-cut board product
 * Can be extended for other product types in the future
 */
export interface BoardConfiguration {
  widthCm: number;
  lengthCm: number;
  areaSqM: number;
  boardTypeId: string;
  boardTypeName?: string;
  materialId: string;
  materialName?: string;
  colorId?: string;
  colorName?: string;
  edgeBandingId?: string;
  edgeBandingName?: string;
}

/**
 * Generic product configuration
 * Can be BoardConfiguration or other product types in the future
 */
export type ProductConfiguration = BoardConfiguration | Record<string, any>;

/**
 * A single item in the shopping cart
 */
export interface CartItem {
  /** Unique identifier for this cart line item */
  id: string;
  
  /** Product type identifier (e.g., 'custom-board', 'shelf', 'cabinet') */
  productId: string;
  
  /** Display name of the product */
  name: string;
  
  /** Optional detailed description */
  description?: string;
  
  /** Quantity of this item */
  quantity: number;
  
  /** Price per single unit (in ILS or your currency) */
  unitPrice: number;
  
  /** Total price for this line (unitPrice * quantity) */
  totalPrice: number;
  
  /** Product-specific configuration data */
  configuration?: ProductConfiguration;
  
  /** ISO timestamp when item was added to cart */
  createdAt: string;
  
  /** Optional: Product thumbnail URL */
  thumbnailUrl?: string;
}

/**
 * Input type for adding a new item to cart
 * Omits fields that are auto-generated
 */
export type CartItemInput = Omit<CartItem, 'id' | 'totalPrice' | 'createdAt'>;

/**
 * Cart totals and summary information
 */
export interface CartTotals {
  /** Sum of all item totalPrice values */
  subtotal: number;
  
  /** Total number of individual items (sum of all quantities) */
  itemCount: number;
  
  /** Number of unique line items */
  lineItemCount: number;
  
  /** Future: Shipping cost */
  shipping?: number;
  
  /** Future: Tax amount */
  tax?: number;
  
  /** Future: Discount amount */
  discount?: number;
  
  /** Future: Final total (subtotal + shipping + tax - discount) */
  total?: number;
}

/**
 * Cart state structure
 */
export interface CartState {
  items: CartItem[];
  totals: CartTotals;
}

/**
 * Cart actions interface
 */
export interface CartActions {
  /** Add a new item or increment quantity if identical item exists */
  addItem: (item: CartItemInput) => void;
  
  /** Remove an item by its ID */
  removeItem: (id: string) => void;
  
  /** Update quantity of an existing item */
  updateQuantity: (id: string, quantity: number) => void;
  
  /** Clear all items from cart */
  clearCart: () => void;
  
  /** Check if an item with given config already exists */
  findSimilarItem: (item: CartItemInput) => CartItem | undefined;
}

/**
 * Complete cart context value
 */
export interface CartContextValue extends CartState, CartActions {}

