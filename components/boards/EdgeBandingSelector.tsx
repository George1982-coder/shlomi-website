'use client';

import { Check } from 'lucide-react';
import { EdgeBandingOption } from '@/types/boards';

interface EdgeBandingSelectorProps {
  options: EdgeBandingOption[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

function EdgeBandingDiagram({ type }: { type: string }) {
  const baseClass = "w-full h-32 border-4 border-gray-300 rounded-lg relative";
  
  switch (type) {
    case 'none':
      return (
        <div className={baseClass}>
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl">
            ✕
          </div>
        </div>
      );
    case 'long-sides':
      return (
        <div className={baseClass}>
          <div className="absolute top-0 right-0 left-0 h-2 bg-accent-500"></div>
          <div className="absolute bottom-0 right-0 left-0 h-2 bg-accent-500"></div>
        </div>
      );
    case 'all-sides':
      return (
        <div className="w-full h-32 border-4 border-accent-500 bg-gray-50 rounded-lg relative">
          <div className="absolute inset-0 flex items-center justify-center text-accent-600 font-bold text-lg">
            4 צדדים
          </div>
        </div>
      );
    case 'single':
      return (
        <div className={baseClass}>
          <div className="absolute top-0 bottom-0 right-0 w-2 bg-accent-500"></div>
          <div className="absolute top-0 bottom-0 left-0 w-2 bg-accent-500"></div>
        </div>
      );
    default:
      return <div className={baseClass}></div>;
  }
}

export default function EdgeBandingSelector({
  options,
  selectedId,
  onSelect,
}: EdgeBandingSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">מיקום הקנטים</h2>
      <p className="text-gray-600 mb-6">
        בחרו היכן תרצו להוסיף קנט לגימור הקצוות. קנט מקנה מראה מוגמר ועמידות גבוהה יותר.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`relative text-right rounded-xl p-5 transition-all ${
              selectedId === option.id
                ? 'ring-4 ring-primary-500 bg-primary-50 shadow-xl'
                : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-primary-300 bg-white shadow-md hover:shadow-lg'
            }`}
          >
            {/* Selected Indicator */}
            {selectedId === option.id && (
              <div className="absolute top-3 left-3 z-10 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}

            {/* Diagram */}
            <div className="mb-4">
              <EdgeBandingDiagram type={option.diagram} />
            </div>

            {/* Text */}
            <h3 className="text-base font-bold text-gray-900 mb-2">{option.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

