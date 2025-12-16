'use client';

import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerData = {
  contact: {
    title: 'צור קשר',
    items: [
      { icon: Phone, text: '050-1234567' },
      { icon: Mail, text: 'info@carpentry.co.il' },
      { icon: MapPin, text: 'רחוב הנגרים 15, תל אביב' },
    ]
  },
  info: {
    title: 'מידע שימושי',
    links: [
      'מי אנחנו',
      'מדריכים ועצות',
      'לוחות מידות סטנדרטיים',
      'אזורי משלוח',
      'תנאי שירות',
    ]
  },
  services: {
    title: 'השירותים שלנו',
    links: [
      'מדפים בהתאמה אישית',
      'ארונות מעוצבים',
      'שולחנות עבודה',
      'פרספקס ופוליקרבונט',
      'חיתוך לפי מידה',
    ]
  },
  popular: {
    title: 'קטגוריות פופולריות',
    links: [
      'מדפי עץ מלא',
      'לוחות MDF',
      'מערכות הזזה',
      'אביזרים ומנגנונים',
      'פתרונות אחסון',
    ]
  }
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent-400">
              {footerData.contact.title}
            </h3>
            <div className="space-y-4">
              {footerData.contact.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-primary-400" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
            {/* Social Media */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-600 hover:bg-accent-500 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-400">
              {footerData.info.title}
            </h3>
            <ul className="space-y-3">
              {footerData.info.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-accent-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-400">
              {footerData.services.title}
            </h3>
            <ul className="space-y-3">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-accent-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-400">
              {footerData.popular.title}
            </h3>
            <ul className="space-y-3">
              {footerData.popular.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-accent-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">הישארו מעודכנים</h3>
            <p className="text-gray-400 mb-6">
              הצטרפו לרשימת התפוצה שלנו וקבלו עדכונים על מבצעים, חידושים וטיפים מועילים
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="כתובת אימייל"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:outline-none text-white"
              />
              <button className="btn-accent px-8">הרשמה</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="mb-2">
            כל הזכויות שמורות לנגריית האינטרנט © {new Date().getFullYear()}
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-primary-400 transition-colors">
              תנאי שימוש
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">
              מדיניות פרטיות
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">
              הצהרת נגישות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

