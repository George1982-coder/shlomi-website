'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const galleryImages = [
  '/Panels/image1.png',
  '/Panels/image2.png',
  '/Panels/image3.png',
  '/Panels/image4.png',
  '/Panels/image5.png',
  '/Panels/image6.png',
  '/Panels/image7.png',
  '/Panels/image8.png',
  '/Panels/image9.png',
];

export default function BoardIntroSection() {
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Right Column - Images (in RTL, appears on right) */}
      <div className="order-1 lg:order-2">
        {/* Main Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg mb-4">
          <Image
            src={mainImage}
            alt="תמונה ראשית"
            fill
            className="object-cover"
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(image)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                mainImage === image
                  ? 'ring-4 ring-primary-500 shadow-lg'
                  : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-primary-300'
              }`}
            >
              <Image
                src={image}
                alt={`תמונה ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Left Column - Text Content (in RTL, appears on left) */}
      <div className="order-2 lg:order-1">
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">סיכום</h2>
          
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">
                ניתן להזמין את הלוחות שלכם באיסוף עצמי מהמפעל שלנו או במשלוח מהיר עד הבית בכל רחבי הארץ.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">
                כל הלוחות נחתכים במדויק במכונות חיתוך מתקדמות עם גמר מושלם ואיכות פרימיום.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">
                יש לכם שאלות לגבי המוצר או תהליך ההזמנה? צוות המומחים שלנו זמין בווטסאפ לכל ייעוץ ותמיכה.
              </p>
            </li>
          </ul>

          <div className="bg-white rounded-lg p-4 border-r-4 border-accent-500">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-primary-700">שימו לב:</strong> לאחר מילוי כל השדות והתאמת הפרטים 
              לצרכים שלכם, תוכלו להוסיף את המוצר לסל או ליצור קשר ישיר איתנו דרך ווטסאפ 
              לקבלת ייעוץ מקצועי והמלצות נוספות.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

