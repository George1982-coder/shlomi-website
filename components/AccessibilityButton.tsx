'use client';

import { useState } from 'react';
import { Accessibility, X, Plus, Minus, Eye, Type } from 'lucide-react';

export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);

  const accessibilityOptions = [
    { icon: Plus, label: 'הגדל טקסט', action: () => console.log('Increase text') },
    { icon: Minus, label: 'הקטן טקסט', action: () => console.log('Decrease text') },
    { icon: Eye, label: 'ניגודיות גבוהה', action: () => console.log('High contrast') },
    { icon: Type, label: 'פונט קריא', action: () => console.log('Readable font') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Accessibility Menu */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 w-64 animate-fade-in">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <h3 className="font-bold text-gray-900">נגישות</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2">
            {accessibilityOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <button
                  key={index}
                  onClick={option.action}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-right"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{option.label}</span>
                </button>
              );
            })}
          </div>
          <button className="w-full mt-4 pt-3 border-t border-gray-200 text-sm text-gray-500 hover:text-primary-600 transition-colors">
            איפוס הגדרות
          </button>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <Accessibility className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}

