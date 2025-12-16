'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { MaterialOption } from '@/types/boards';

interface MaterialSelectorProps {
  materials: MaterialOption[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function MaterialSelector({
  materials,
  selectedId,
  onSelect,
}: MaterialSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">חומר הלוח</h2>
      <p className="text-gray-600 mb-6">
        בחרו את חומר הבסיס והעיבוי המתאים לשימוש הסופי של הלוח.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {materials.map((material) => (
          <button
            key={material.id}
            onClick={() => onSelect(material.id)}
            className={`relative text-right rounded-lg overflow-hidden transition-all ${
              selectedId === material.id
                ? 'ring-4 ring-accent-500 shadow-xl'
                : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-accent-300 shadow-md hover:shadow-lg'
            }`}
          >
            {/* Selected Indicator */}
            {selectedId === material.id && (
              <div className="absolute top-2 left-2 z-10 w-7 h-7 bg-accent-600 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}

            {/* Image */}
            <div className="relative h-32 w-full bg-gray-100">
              <Image
                src={material.image}
                alt={material.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 bg-white">
              <h3 className="text-base font-bold text-gray-900 mb-1">{material.name}</h3>
              <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                {material.description}
              </p>
              <div className="text-xs font-semibold text-accent-600">
                {material.thickness}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

