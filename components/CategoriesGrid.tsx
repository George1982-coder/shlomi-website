'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Category {
  title: string;
  description: string;
  buttons: string[];
}

const categories: Category[] = [
  {
    title: 'ארון מותאם במיוחד',
    description: 'תכנון ארון בהתאמה אישית מלאה, עיצוב ייחודי וביצוע מקצועי לפי המידות והצרכים המדויקים שלך. אפשרויות עיצוב רבות ומגוון חומרים איכותיים.',
    buttons: [
      'ארונות הזזה מעוצבים',
      'ארון קיר בהתאמה',
      'תוספת מדפים למערכת',
      'מערכות תלייה וארגון'
    ]
  },
  {
    title: 'חומרים שקופים ומיוחדים',
    description: 'פרספקס, פוליקרבונט וזכוכית איכותית. מגוון עבה ודק, ניתן לחיתוך מדויק לפי מידה. אופציות צבעוניות וחלביות, מתאים לעיצוב פנים וחוץ.',
    buttons: [
      'פרספקס צבעוני מעוצב',
      'פוליקרבונט חלבי',
      'לוחות זכוכית',
      'חומרים נוספים'
    ]
  },
  {
    title: 'שדרוג למערכת קיימת',
    description: 'פתרונות חכמים לשדרוג ארונות קיימים. החלפת דלתות, הוספת מדפים, מגירות נשלפות, מנגנוני הרמה מתקדמים ועוד. מעניקים חיים חדשים למערכת קיימת.',
    buttons: [
      'מדפים חכמים',
      'החלפת דלתות',
      'מגירות נשלפות איכותיות',
      'מנגנוני הרמה וארגון'
    ]
  },
  {
    title: 'לוחות עץ איכותיים',
    description: 'לוחות עץ מלא ו-MDF איכותי, בחיתוך מדויק לפי מידה. גמר איכותי בצבעים רבים, עמידות גבוהה ומראה מושלם. מתאים לכל פרויקט.',
    buttons: [
      'לוחות עץ מלא',
      'MDF מצופה איכותי',
      'לוחות מעוצבים',
      'חיתוך מיוחד'
    ]
  }
];

export default function CategoriesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-gray-900">
            המגוון השלם שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פתרונות נגרות מקיפים לכל צורך - ממדפים בודדים ועד פרויקטים מורכבים
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon/Number Badge */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 text-white font-bold text-xl">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="heading-sm mb-3 text-gray-900">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Buttons */}
              <div className="space-y-2">
                {category.buttons.map((button, btnIndex) => {
                  // Link the "חיתוך מיוחד" button to the custom cut page
                  const isCustomCutButton = index === 3 && btnIndex === 3;
                  const ButtonWrapper = isCustomCutButton ? Link : 'button';
                  const buttonProps = isCustomCutButton ? { href: '/boards/custom-cut' } : {};
                  
                  return (
                    <ButtonWrapper
                      key={btnIndex}
                      {...buttonProps}
                      className="w-full text-right px-4 py-3 bg-gradient-to-l from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg transition-all duration-300 flex items-center justify-between group shadow-md hover:shadow-lg"
                    >
                      <span className="font-medium">{button}</span>
                      <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </ButtonWrapper>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

