'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { BoardType } from '@/types/boards';

interface BoardTypeSelectorProps {
  boardTypes: BoardType[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function BoardTypeSelector({
  boardTypes,
  selectedId,
  onSelect,
}: BoardTypeSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">סוג הלוח</h2>
      <p className="text-gray-600 mb-6">
        בחרו את סוג הלוח הבסיסי המתאים לפרויקט שלכם. לכל סוג יתרונות שונים.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boardTypes.map((board) => (
          <button
            key={board.id}
            onClick={() => onSelect(board.id)}
            className={`relative text-right rounded-xl overflow-hidden transition-all ${
              selectedId === board.id
                ? 'ring-4 ring-primary-500 shadow-xl'
                : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-primary-300 shadow-md hover:shadow-lg'
            }`}
          >
            {/* Selected Indicator */}
            {selectedId === board.id && (
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}

            {/* Image */}
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={board.image}
                alt={board.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{board.name}</h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {board.description}
              </p>
              <div className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
                {board.thickness}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

