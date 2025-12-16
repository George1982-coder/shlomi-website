'use client';

import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, CreditCard } from 'lucide-react';
import { useCart } from './CartContext';
import { formatPrice } from '@/lib/pricing';
import { formatConfigurationSummary } from '@/lib/cartUtils';
import { generateGrowCheckoutLink, formatGrowAmount, isValidPaymentAmount } from '@/lib/growPayment';

export default function CartPageContent() {
  const { items, totals, removeItem, updateQuantity, clearCart } = useCart();

  /**
   * Handle quantity update with validation
   */
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  /**
   * Empty cart state
   */
  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">הסל שלך ריק כרגע</h1>
              <p className="text-lg text-gray-600 mb-8">
                נראה שעדיין לא הוספת מוצרים לסל. התחל לבנות את ההזמנה שלך עכשיו!
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                חזרה לדף הבית
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Cart with items
   */
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">סל הקניות שלך</h1>
          <p className="text-lg text-gray-600">
            {totals.lineItemCount} {totals.lineItemCount === 1 ? 'פריט' : 'פריטים'} בסל
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              const configSummary = formatConfigurationSummary(item.configuration);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-6">
                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      )}

                      {/* Configuration Summary */}
                      {configSummary.length > 0 && (
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">פרטי התצורה:</h4>
                          <ul className="space-y-1">
                            {configSummary.map((detail, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-primary-600">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">כמות:</span>
                          <div className="flex items-center gap-1 bg-gray-100 rounded-lg">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                              aria-label="הפחת כמות"
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                              }
                              className="w-16 text-center bg-transparent border-none focus:outline-none font-medium"
                              min="1"
                              aria-label="כמות"
                            />
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                              aria-label="הוסף כמות"
                            >
                              <Plus className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="הסר פריט"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="text-sm font-medium">הסר</span>
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-left">
                      <div className="text-sm text-gray-600 mb-1">מחיר ליחידה:</div>
                      <div className="text-lg font-semibold text-gray-900 mb-3">
                        {formatPrice(item.unitPrice)}
                      </div>
                      <div className="text-sm text-gray-600 mb-1">סה"כ:</div>
                      <div className="text-2xl font-bold text-primary-600">
                        {formatPrice(item.totalPrice)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Clear Cart Button */}
            {items.length > 1 && (
              <button
                onClick={clearCart}
                className="w-full px-6 py-3 text-red-600 hover:bg-red-50 border-2 border-red-200 hover:border-red-300 rounded-lg transition-all font-medium"
              >
                רוקן סל קניות
              </button>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">סיכום הזמנה</h2>

              {/* Totals Breakdown */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>סה"כ פריטים:</span>
                  <span className="font-medium">{totals.itemCount}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>סכום ביניים:</span>
                  <span className="font-medium">{formatPrice(totals.subtotal)}</span>
                </div>
                {/* Future: Add shipping, tax, etc. */}
                <div className="text-sm text-gray-500 italic">
                  * עלויות משלוח יחושבו בשלב הבא
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-xl font-bold text-gray-900">סה"כ לתשלום:</span>
                <span className="text-3xl font-bold text-primary-600">
                  {formatPrice(totals.subtotal)}
                </span>
              </div>

              {/* Checkout Button with Grow Payment */}
              {isValidPaymentAmount(totals.subtotal) ? (
                <a
                  href={generateGrowCheckoutLink(items, formatGrowAmount(totals.subtotal))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center group"
                  aria-label="להמשך לתשלום מאובטח"
                >
                  <div className="flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>המשך לתשלום מאובטח</span>
                  </div>
                  <div className="text-xs font-normal mt-2 opacity-90">
                    💳 אשראי | 📱 Bit | 🍎 Apple Pay | 🔒 Grow Payment
                  </div>
                </a>
              ) : (
                <button
                  disabled
                  className="w-full px-6 py-4 bg-gray-400 cursor-not-allowed text-white font-bold rounded-lg mb-4"
                >
                  סכום לא תקין לתשלום
                </button>
              )}

              {/* Continue Shopping */}
              <Link
                href="/"
                className="block w-full px-6 py-3 text-center border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-bold rounded-lg transition-all mt-4"
              >
                המשך בקנייה
              </Link>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>משלוח מהיר לכל הארץ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>אפשרות לאיסוף עצמי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>תשלום מאובטח</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

