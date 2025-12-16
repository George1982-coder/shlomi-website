'use client';

import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { RelatedProduct } from '@/types/boards';

interface RelatedProductsSectionProps {
  products: RelatedProduct[];
}

export default function RelatedProductsSection({ products }: RelatedProductsSectionProps) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 mb-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">מוצרים קשורים</h2>
        <p className="text-lg text-gray-600">
          מוצרים נוספים שעשויים לעניין אתכם
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="card overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
              
              {/* Description bullets */}
              <ul className="space-y-2 mb-6">
                {product.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-accent-500 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-l from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg group">
                <span>לפרטים והזמנה</span>
                <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

