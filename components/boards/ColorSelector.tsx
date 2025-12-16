'use client';

import { Check } from 'lucide-react';
import { ColorOption } from '@/types/boards';

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function ColorSelector({
  colors,
  selectedId,
  onSelect,
}: ColorSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">גוון / גימור</h2>
      <p className="text-gray-600 mb-6">
        בחרו את צבע הגימור הרצוי. הצבעים הם ייצוג משוער ועשויים להשתנות מעט במציאות.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelect(color.id)}
            className="flex flex-col items-center group"
          >
            {/* Color Swatch */}
            <div
              className={`relative w-20 h-20 rounded-lg shadow-md transition-all ${
                color.colorClass
              } ${
                selectedId === color.id
                  ? 'ring-4 ring-primary-500 scale-110'
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              {selectedId === color.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Label */}
            <span className={`mt-2 text-sm text-center font-medium transition-colors ${
              selectedId === color.id
                ? 'text-primary-700'
                : 'text-gray-700 group-hover:text-primary-600'
            }`}>
              {color.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

