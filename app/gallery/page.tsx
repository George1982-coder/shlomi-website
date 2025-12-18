import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'גלריית עבודות | נגרות מותאמת אישית',
  description: 'צפו בפרויקטים שהשלמנו - ארונות, מדפים, שולחנות ופתרונות נגרות מותאמים אישית',
};

const galleryProjects = [
  {
    id: 1,
    title: 'ספרייה מעוצבת לסלון',
    category: 'ריהוט לסלון',
    description: 'ספרייה גדולה ואלגנטית מעץ אלון עם מדפים מתכווננים ותאורת LED משולבת',
    image: '/images/img4.webp',
  },
  {
    id: 2,
    title: 'מטבח מודרני מלא',
    category: 'מטבחים',
    description: 'מערכת ארונות מטבח מלאה בעיצוב מודרני עם משטחי קוריאן ומנגנוני soft-close',
    image: '/images/img2.webp',
  },
  {
    id: 3,
    title: 'שולחן אוכל מעץ מלא',
    category: 'רהיטים',
    description: 'שולחן אוכל מהודר מעץ אגוז מלא עם גימור מבריק ובסיס מתכת מעוצב',
    image: '/images/img1.webp',
  },
  {
    id: 4,
    title: 'ארון בגדים מותאם',
    category: 'ארונות',
    description: 'ארון בגדים גדול עם דלתות הזזה, תאורה פנימית ומגירות ארגון',
    image: '/images/img3.webp',
  },
  {
    id: 5,
    title: 'מזנון לסלון',
    category: 'ריהוט לסלון',
    description: 'מזנון אלגנטי עם דלתות זכוכית, מדפים פנימיים ותאי אחסון מוסתרים',
    image: '/images/img5.webp',
  },
  {
    id: 6,
    title: 'ארון נעליים מעוצב',
    category: 'אחסון',
    description: 'ארון נעליים חכם עם מדפים מתכווננים, אוורור טבעי וגימור עמיד',
    image: '/images/img6.webp',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            גלריית עבודות
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            הצצה לפרויקטים שהשלמנו - מדפים מותאמים אישית, ארונות בהזמנה, פתרונות אחסון 
            ורהיטים מעוצבים שיצרנו עבור לקוחותינו המרוצים
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            רוצים גם אתם פרויקט כזה?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            בואו ניצור יחד את הרהיט או פתרון האחסון המושלם עבורכם. 
            עיצוב מותאם אישית, איכות פרימיום וביצוע מקצועי.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boards/custom-cut"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              התחל לעצב עכשיו
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/972525090556"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📱 שלח הודעה בווטסאפ
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">פרויקטים הושלמו</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl font-bold text-accent-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">שנות ניסיון</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
            <div className="text-gray-600 font-medium">דירוג ממוצע</div>
          </div>
        </div>
      </div>
    </div>
  );
}


