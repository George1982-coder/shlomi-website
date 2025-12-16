'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, ShoppingCart, Info, AlertCircle, CheckCircle } from 'lucide-react';
import { BoardConfiguration } from '@/types/boards';
import { useCart } from '@/components/cart/CartContext';
import { calculateBoardItemPrice, formatPrice } from '@/lib/pricing';
import { boardTypes, materialOptions, colorOptions, edgeBandingOptions } from '@/data/boardsData';

interface OrderSummaryActionsProps {
  config: BoardConfiguration;
}

export default function OrderSummaryActions({ config }: OrderSummaryActionsProps) {
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { addItem } = useCart();

  /**
   * Get human-readable name for a configuration option
   */
  const getBoardTypeName = (id: string | null) => {
    return boardTypes.find((t) => t.id === id)?.name || '';
  };

  const getMaterialName = (id: string | null) => {
    return materialOptions.find((m) => m.id === id)?.name || '';
  };

  const getColorName = (id: string | null) => {
    return colorOptions.find((c) => c.id === id)?.name || '';
  };

  const getEdgeBandingName = (id: string | null) => {
    return edgeBandingOptions.find((e) => e.id === id)?.name || '';
  };

  /**
   * Validate configuration before adding to cart
   */
  const validateConfiguration = (): boolean => {
    // Check dimensions
    if (!config.width || !config.length) {
      setErrorMessage('אנא הזינו את מידות הלוח (רוחב ואורך)');
      setStatus('error');
      return false;
    }

    if (config.width < 6 || config.width > 240 || config.length < 6 || config.length > 240) {
      setErrorMessage('המידות חייבות להיות בין 6 ל-240 ס"מ');
      setStatus('error');
      return false;
    }

    // Check required selections
    if (!config.boardTypeId) {
      setErrorMessage('אנא בחרו סוג לוח');
      setStatus('error');
      return false;
    }

    if (!config.materialId) {
      setErrorMessage('אנא בחרו חומר לוח');
      setStatus('error');
      return false;
    }

    return true;
  };

  /**
   * Calculate current configuration price
   */
  const calculatePrice = () => {
    if (!config.width || !config.length || !config.boardTypeId || !config.materialId) {
      return null;
    }

    try {
      return calculateBoardItemPrice({
        widthCm: config.width,
        lengthCm: config.length,
        boardTypeId: config.boardTypeId,
        materialId: config.materialId,
        edgeBandingId: config.edgeBandingId || undefined,
      });
    } catch (error) {
      console.error('Price calculation error:', error);
      return null;
    }
  };

  /**
   * Handle add to cart action
   */
  const handleAddToCart = () => {
    // Validate configuration
    if (!validateConfiguration()) {
      // Auto-clear error after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    // Calculate price
    const priceResult = calculatePrice();
    if (!priceResult) {
      setErrorMessage('שגיאה בחישוב המחיר. אנא נסו שוב.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      // Add item to cart
      addItem({
        productId: 'custom-board',
        name: 'לוח חתוך לפי מידה',
        description: `${getBoardTypeName(config.boardTypeId)} - ${getMaterialName(config.materialId)}`,
        quantity: 1,
        unitPrice: priceResult.unitPrice,
        configuration: {
          widthCm: config.width!,
          lengthCm: config.length!,
          areaSqM: priceResult.areaSqM,
          boardTypeId: config.boardTypeId!,
          boardTypeName: getBoardTypeName(config.boardTypeId),
          materialId: config.materialId!,
          materialName: getMaterialName(config.materialId),
          colorId: config.colorId || undefined,
          colorName: config.colorId ? getColorName(config.colorId) : undefined,
          edgeBandingId: config.edgeBandingId || undefined,
          edgeBandingName: config.edgeBandingId ? getEdgeBandingName(config.edgeBandingId) : undefined,
        },
      });

      // Show success message
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      setErrorMessage('שגיאה בהוספה לסל. אנא נסו שוב.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  /**
   * Handle WhatsApp consultation
   */
  const handleWhatsApp = () => {
    window.open('https://wa.me/972525090556', '_blank');
  };

  // Calculate current price for display
  const currentPrice = calculatePrice();

  return (
    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Status Messages */}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border-r-4 border-red-500 rounded-lg flex items-start gap-3 animate-fade-in">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-semibold">שגיאה</p>
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border-r-4 border-green-500 rounded-lg flex items-start gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-semibold">הצלחה!</p>
            <p className="text-green-700 mb-2">המוצר נוסף לסל בהצלחה.</p>
            <Link
              href="/cart"
              className="inline-block text-green-700 font-semibold underline hover:text-green-800"
            >
              לצפייה בסל ←
            </Link>
          </div>
        </div>
      )}

      {/* Price Display */}
      {currentPrice && (
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border-2 border-primary-200">
          <div className="flex items-baseline justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">מחיר משוער:</h3>
            <div className="text-3xl font-bold text-primary-600">
              {formatPrice(currentPrice.unitPrice)}
            </div>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <div className="flex justify-between">
              <span>שטח:</span>
              <span className="font-medium">{currentPrice.areaSqM.toFixed(2)} מ"ר</span>
            </div>
            {currentPrice.breakdown.edgeBandingCost > 0 && (
              <div className="flex justify-between">
                <span>קנטים ({currentPrice.breakdown.edgeBandingLength.toFixed(1)} מ'):</span>
                <span className="font-medium">{formatPrice(currentPrice.breakdown.edgeBandingCost)}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * המחיר הסופי עשוי להשתנות בהתאם לזמינות החומרים ולכמות ההזמנה
          </p>
        </div>
      )}

      {/* Complex Cutting Notice */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-primary-600" />
          צריכים חיתוך בצורה מורכבת יותר?
        </h3>
        <p className="text-gray-700 mb-4">
          אם אתם מעוניינים בחיתוכים מיוחדים, צורות לא סטנדרטיות, או פתרונות מורכבים - 
          אנחנו כאן לעזור! צרו קשר איתנו בווטסאפ ונעזור לכם למצוא את הפתרון המושלם.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-xl"
          aria-label="קבעו ייעוץ בווטסאפ"
        >
          <MessageCircle className="w-5 h-5" />
          קבע/י ייעוץ ב-WhatsApp
        </button>

        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-3 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!currentPrice}
          aria-label="הוסיפו לסל קניות"
        >
          <ShoppingCart className="w-5 h-5" />
          הוסף/י לסל
        </button>
      </div>

      {/* Additional Info */}
      <div className="bg-white rounded-lg p-5">
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span>כמות ניתן לעדכן בעמוד הסל לאחר ההוספה</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span>תיאום משלוח או איסוף יתבצע לאחר אישור ההזמנה</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">•</span>
            <span>זמן ייצור משוער: 3-5 ימי עסקים</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
