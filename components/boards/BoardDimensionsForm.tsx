'use client';

import { AlertCircle } from 'lucide-react';

interface BoardDimensionsFormProps {
  width: number | null;
  length: number | null;
  onWidthChange: (value: number | null) => void;
  onLengthChange: (value: number | null) => void;
}

const MIN_SIZE = 6;
const MAX_SIZE = 240;

export default function BoardDimensionsForm({
  width,
  length,
  onWidthChange,
  onLengthChange,
}: BoardDimensionsFormProps) {
  const isWidthValid = width === null || (width >= MIN_SIZE && width <= MAX_SIZE);
  const isLengthValid = length === null || (length >= MIN_SIZE && length <= MAX_SIZE);

  const handleWidthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      onWidthChange(null);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        onWidthChange(num);
      }
    }
  };

  const handleLengthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      onLengthChange(null);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        onLengthChange(num);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">מידות בסנטימטרים</h2>
      <p className="text-gray-600 mb-6">
        הזינו את המידות המדויקות של הלוח הרצוי. וודאו שהמידות נמדדו בצורה נכונה.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Width Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            רוחב (ס"מ)
          </label>
          <input
            type="number"
            min={MIN_SIZE}
            max={MAX_SIZE}
            value={width ?? ''}
            onChange={handleWidthInput}
            placeholder="הקלידו רוחב"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              !isWidthValid
                ? 'border-red-500 focus:border-red-600 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
            } focus:outline-none focus:ring-4`}
            dir="ltr"
          />
          {!isWidthValid && (
            <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>ניתן להזמין מידות בין {MIN_SIZE} ל-{MAX_SIZE} ס"מ.</span>
            </div>
          )}
        </div>

        {/* Length Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            אורך (ס"מ)
          </label>
          <input
            type="number"
            min={MIN_SIZE}
            max={MAX_SIZE}
            value={length ?? ''}
            onChange={handleLengthInput}
            placeholder="הקלידו אורך"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              !isLengthValid
                ? 'border-red-500 focus:border-red-600 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
            } focus:outline-none focus:ring-4`}
            dir="ltr"
          />
          {!isLengthValid && (
            <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>ניתן להזמין מידות בין {MIN_SIZE} ל-{MAX_SIZE} ס"מ.</span>
            </div>
          )}
        </div>
      </div>

      {width && length && isWidthValid && isLengthValid && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            <strong>שטח כולל:</strong> {(width * length / 10000).toFixed(2)} מ"ר
          </p>
        </div>
      )}
    </div>
  );
}

