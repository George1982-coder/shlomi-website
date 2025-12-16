'use client';

import Image from 'next/image';
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelect(color.id)}
            className="flex flex-col items-center group"
          >
            {/* Color Swatch with Image */}
            <div
              className={`relative w-24 h-24 rounded-lg overflow-hidden shadow-md transition-all ${
                selectedId === color.id
                  ? 'ring-4 ring-primary-500 scale-105'
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              {/* Material Image */}
              {color.image ? (
                <Image
                  src={color.image}
                  alt={color.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              ) : (
                /* Fallback to color class if no image */
                <div className={`w-full h-full ${color.colorClass}`}></div>
              )}

              {/* Selected Indicator */}
              {selectedId === color.id && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-6 h-6 text-white" />
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
