'use client';

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface Product {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

const products: Product[] = [
  {
    title: 'לוחות עץ מותאמים אישית',
    description: 'לוחות MDF וסנדוויץ\' איכותיים בחיתוך מדויק. מתאימים לכל פרויקט בית או עסק, זמינים במגוון גדלים וצבעים. ניתנים לחיתוך מדויק לפי המידות שלך.',
    image: 'https://images.unsplash.com/photo-1551268831-41c72c8cb0a3?w=800',
  },
  {
    title: 'מדפים מעוצבים לפי מידה',
    description: 'מדפי עץ מלא ו-MDF מעוצבים, מחוזקים ומהודרים. זמינים במגוון צבעים ועיבויים, עם אפשרות להתאמה מושלמת למרחב שלך ולסגנון העיצוב הרצוי.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
    featured: true,
  },
  {
    title: 'שידות וארגזי אחסון מעוצבים',
    description: 'שידות מעוצבות לארון קיים או חדש. זמינות במגוון מידות וגוונים, מושלמות לארגון חלל עבודה, חדר שינה או כל חלל אחר. איכות פרימיום וביצוע מדויק.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-gray-900">
            המומחיות שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פתרונות נגרות איכותיים המותאמים במיוחד עבורך
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${
                product.featured
                  ? 'md:transform md:scale-105 shadow-2xl ring-4 ring-accent-400'
                  : 'shadow-lg hover:shadow-xl'
              } transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    ⭐ מבוקש ביותר
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{product.description}</p>
                <button className="flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 group-hover:gap-3">
                  למידע נוסף
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h3 className="heading-sm mb-4 text-primary-600">תהליך הזמנה פשוט</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              פשוט שלחו לנו את המידות והדרישות שלכם, ואנחנו נדאג לייצר עבורכם את הפתרון המושלם. 
              תהליך הייצור מהיר, מדויק ומקצועי.
            </p>
            <button className="btn-primary">
              התחילו עכשיו
            </button>
          </div>
          <div className="card p-8 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
            <h3 className="heading-sm mb-4">ייעוץ חינם ואישי</h3>
            <p className="leading-relaxed mb-4">
              לא בטוחים מה מתאים לכם? צוות המומחים שלנו כאן כדי לעזור. נספק ייעוץ מקצועי 
              והמלצות מותאמות אישית לצרכים שלכם.
            </p>
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              שוחחו איתנו
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

