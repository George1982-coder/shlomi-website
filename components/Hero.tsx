'use client';

import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mr-auto text-white">
          <h1 className="heading-xl mb-6 animate-fade-in-up leading-tight">
            פתרונות נגרות{' '}
            <span className="text-accent-400">מותאמים אישית</span>
            {' '}במיוחד בשבילך
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            מעצבים ומייצרים רהיטים איכוtiים לבית ולעסק. מדפים מותאמים, ארונות בהזמנה אישית, 
            פתרונות אחסון חכמים ושולחנות מעוצבים - הכל בדיוק לפי המידות והצרכים שלך.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-accent flex items-center gap-2 group">
              למידע נוסף והזמנה
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline bg-white/10 backdrop-blur-sm border-white hover:bg-white hover:text-primary-600">
              גלריית עבודות
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center font-bold text-2xl">
                ★
              </div>
              <div>
                <div className="font-bold text-lg">4.9</div>
                <div className="text-gray-300">מעל 500 ביקורות</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center font-bold text-2xl">
                ✓
              </div>
              <div>
                <div className="font-bold text-lg">15+</div>
                <div className="text-gray-300">שנות ניסיון</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

