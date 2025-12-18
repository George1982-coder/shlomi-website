'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Settings } from 'lucide-react';
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
            <Link href={product.route} className="block relative h-56 bg-gray-100 overflow-hidden group/image">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover/image:scale-110 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-primary-600 font-bold">לחץ לפרטים</span>
                </div>
              </div>
            </Link>

            {/* Content */}
            <div className="p-6">
              <Link href={product.route}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              
              {/* Description bullets */}
              <ul className="space-y-2 mb-4">
                {product.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-accent-500 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Price Display */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">
                    {product.priceType === 'configurable' ? 'מחיר התחלתי' : 'מחיר'}
                  </span>
                  <div className="flex items-baseline gap-1">
                    {product.priceType === 'configurable' && (
                      <span className="text-sm text-gray-600 font-medium">החל מ-</span>
                    )}
                    <span className="text-2xl font-bold text-primary-600">₪{product.priceFrom}</span>
                    <span className="text-sm text-gray-500">+מע"מ</span>
                  </div>
                </div>
                {product.standardSpecs && (
                  <div className="flex items-start gap-2 mt-2">
                    <Settings className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {product.standardSpecs}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <Link
                href={product.route}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-l from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg group"
              >
                <span>
                  {product.priceType === 'configurable' ? 'התאמה אישית והזמנה' : 'לפרטים והזמנה'}
                </span>
                <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

