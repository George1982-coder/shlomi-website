'use client';

/**
 * Global Cart State Management
 * 
 * Provides cart state and actions to the entire application.
 * Uses React Context for now, structured to easily migrate to
 * Zustand or Redux if needed in the future.
 * 
 * Future enhancements:
 * - Persist cart to localStorage
 * - Sync with backend API
 * - Handle concurrent updates
 * - Support for guest vs. authenticated user carts
 */

import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import {
  CartItem,
  CartItemInput,
  CartTotals,
  CartContextValue,
  BoardConfiguration,
} from '@/types/cart';
import {
  generateCartItemId,
  areItemsSimilar,
  calculateItemTotal,
  validateQuantity,
} from '@/lib/cartUtils';

// Create context with undefined default
// This forces consumers to use the provider
const CartContext = createContext<CartContextValue | undefined>(undefined);

/**
 * Cart Provider Props
 */
interface CartProviderProps {
  children: React.ReactNode;
}

/**
 * Local storage key for cart persistence
 */
const CART_STORAGE_KEY = 'carpentry-cart';

/**
 * Cart Provider Component
 * Wraps the application to provide cart state globally
 */
export function CartProvider({ children }: CartProviderProps) {
  // Initialize cart state
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);

  /**
   * Calculate cart totals
   * Memoized for performance
   */
  const totals = useMemo((): CartTotals => {
    const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const lineItemCount = items.length;

    return {
      subtotal,
      itemCount,
      lineItemCount,
    };
  }, [items]);

  /**
   * Find a similar item in the cart
   * Used to check if we should increment quantity instead of adding new line
   */
  const findSimilarItem = useCallback(
    (item: CartItemInput): CartItem | undefined => {
      return items.find((existingItem) => areItemsSimilar(item, existingItem));
    },
    [items]
  );

  /**
   * Add item to cart
   * If an identical item exists, increment its quantity
   * Otherwise, add as a new line item
   */
  const addItem = useCallback(
    (itemInput: CartItemInput) => {
      // Validate quantity
      const validatedQuantity = validateQuantity(itemInput.quantity);

      // Check if similar item already exists
      const existingItem = findSimilarItem(itemInput);

      if (existingItem) {
        // Increment quantity of existing item
        updateQuantity(existingItem.id, existingItem.quantity + validatedQuantity);
      } else {
        // Create new cart item
        const newItem: CartItem = {
          ...itemInput,
          id: generateCartItemId(),
          quantity: validatedQuantity,
          totalPrice: calculateItemTotal(itemInput.unitPrice, validatedQuantity),
          createdAt: new Date().toISOString(),
        };

        // Add to cart
        setItems((prev) => [...prev, newItem]);
      }
    },
    [findSimilarItem]
  );

  /**
   * Remove item from cart by ID
   */
  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  /**
   * Update quantity of an existing item
   * If quantity becomes 0 or negative, remove the item
   */
  const updateQuantity = useCallback((id: string, quantity: number) => {
    const validatedQuantity = validateQuantity(quantity);

    if (validatedQuantity < 1) {
      // Remove item if quantity is invalid
      removeItem(id);
      return;
    }

    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: validatedQuantity,
            totalPrice: calculateItemTotal(item.unitPrice, validatedQuantity),
          };
        }
        return item;
      })
    );
  }, []);

  /**
   * Clear all items from cart
   */
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo<CartContextValue>(
    () => ({
      items,
      totals,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      findSimilarItem,
    }),
    [items, totals, addItem, removeItem, updateQuantity, clearCart, findSimilarItem]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

/**
 * Hook to access cart context
 * Must be used within CartProvider
 * 
 * @throws Error if used outside of CartProvider
 * @returns Cart context value with state and actions
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { items, addItem, totals } = useCart();
 *   return <div>Items in cart: {totals.itemCount}</div>;
 * }
 * ```
 */
export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

