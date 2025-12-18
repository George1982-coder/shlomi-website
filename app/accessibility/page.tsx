import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Eye, Ear, Hand, Heart, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | נגרות מותאמת אישית',
  description: 'מחויבות שלנו לנגישות - הבטחת חוויית שימוש נגישה לכל המשתמשים',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
          חזרה לדף הבית
        </Link>

        {/* Page Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-100 rounded-full">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              הצהרת נגישות
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
          </p>

          {/* Accessibility Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-lg">
              <Eye className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-medium text-gray-700 text-center">נגישות חזותית</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-lg">
              <Ear className="w-8 h-8 text-green-600" />
              <span className="text-sm font-medium text-gray-700 text-center">נגישות שמיעתית</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-orange-50 rounded-lg">
              <Hand className="w-8 h-8 text-orange-600" />
              <span className="text-sm font-medium text-gray-700 text-center">נגישות מוטורית</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-lg">
              <Users className="w-8 h-8 text-purple-600" />
              <span className="text-sm font-medium text-gray-700 text-center">נגישות קוגניטיבית</span>
            </div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. מחויבותנו לנגישות
              </h2>
              <p className="mb-4">
                נגריית האינטרנט מחויבת להנגשת אתר האינטרנט שלה לכל אדם עם מוגבלות, 
                על מנת לאפשר לכל אדם לגלוש באופן עצמאי, ביעילות, בכבוד ובשוויון.
              </p>
              <p className="mb-4">
                האתר נבנה תוך שימת דגש על עקרונות הנגישות המקובלים ותקני WCAG 2.1 ברמה AA, 
                כנדרש בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
              </p>
              <p>
                אנו ממשיכים לעבוד על שיפור הנגישות באתר ומקדמים יוזמות להרחבת חוויית הנגישות 
                לכלל המשתמשים.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. התאמות הנגישות באתר
              </h2>
              <p className="mb-4">
                האתר כולל מגוון התאמות נגישות המאפשרות שימוש נוח עבור אנשים עם מוגבלויות:
              </p>

              <div className="space-y-4">
                {/* Visual Accessibility */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-blue-600" />
                    נגישות חזותית
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>ניווט באמצעות מקלדת בלבד (Tab, Enter, חצים)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>תאימות לתוכנות הקראת מסך (NVDA, JAWS, VoiceOver)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>ניגודיות גבוהה בין טקסט לרקע</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>גדלי גופנים גמישים ואפשרות לזום עד 200%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>טקסטים חלופיים (Alt Text) לכל התמונות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>סימון ברור של קישורים ואינטראקציות</span>
                    </li>
                  </ul>
                </div>

                {/* Motor Accessibility */}
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Hand className="w-6 h-6 text-orange-600" />
                    נגישות מוטורית
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>כפתורים ואזורי לחיצה גדולים ומרווחים</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>אפשרות לניווט מלא באמצעות מקלדת</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>זמן מספק למילוי טפסים (ללא הגבלת זמן)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>אפשרות לביטול ולתיקון פעולות</span>
                    </li>
                  </ul>
                </div>

                {/* Cognitive Accessibility */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-600" />
                    נגישות קוגניטיבית
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>עיצוב פשוט, אחיד ואינטואיטיבי</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>כותרות ברורות וארגון היררכי של תוכן</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>הוראות ברורות וקלות להבנה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>הודעות שגיאה ברורות עם הדרכה לתיקון</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>עקביות במיקום ובמבנה לאורך האתר</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. טכנולוגיות ותקנים
              </h2>
              <p className="mb-4">האתר נבנה בהתאם לתקנים הבאים:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>WCAG 2.1:</strong> Web Content Accessibility Guidelines ברמה AA</li>
                <li><strong>ARIA:</strong> Accessible Rich Internet Applications attributes</li>
                <li><strong>HTML5 Semantic:</strong> שימוש בתגי HTML סמנטיים לשיפור הנגישות</li>
                <li><strong>RTL Support:</strong> תמיכה מלאה בכתיבה מימין לשמאל</li>
                <li><strong>Responsive Design:</strong> עיצוב רספונסיבי לכל גדלי מסך</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. דפדפנים נתמכים
              </h2>
              <p className="mb-4">האתר נבדק ונמצא נגיש בדפדפנים הבאים (בגרסאות עדכניות):</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-gray-900 mb-1">Chrome</div>
                  <div className="text-sm text-gray-600">גרסה 90+</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-gray-900 mb-1">Firefox</div>
                  <div className="text-sm text-gray-600">גרסה 88+</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-gray-900 mb-1">Safari</div>
                  <div className="text-sm text-gray-600">גרסה 14+</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-gray-900 mb-1">Edge</div>
                  <div className="text-sm text-gray-600">גרסה 90+</div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. תוכנות עזר נתמכות
              </h2>
              <p className="mb-4">האתר תואם לתוכנות עזר מובילות:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>NVDA:</strong> תוכנת הקראת מסך חינמית ל-Windows</li>
                <li><strong>JAWS:</strong> תוכנת הקראת מסך מובילה ל-Windows</li>
                <li><strong>VoiceOver:</strong> תוכנת הקראה מובנית ב-macOS ו-iOS</li>
                <li><strong>TalkBack:</strong> תוכנת הקראה ל-Android</li>
                <li><strong>ZoomText:</strong> תוכנת הגדלה וקריאה למשתמשי Windows</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. קיצורי מקלדת
              </h2>
              <p className="mb-4">ניתן לנווט באתר באמצעות קיצורי המקלדת הבאים:</p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-4">
                    <kbd className="px-3 py-1 bg-white border-2 border-gray-300 rounded font-mono text-sm">Tab</kbd>
                    <span>מעבר קדימה בין אלמנטים</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <kbd className="px-3 py-1 bg-white border-2 border-gray-300 rounded font-mono text-sm">Shift + Tab</kbd>
                    <span>מעבר אחורה בין אלמנטים</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <kbd className="px-3 py-1 bg-white border-2 border-gray-300 rounded font-mono text-sm">Enter</kbd>
                    <span>הפעלת קישור או כפתור</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <kbd className="px-3 py-1 bg-white border-2 border-gray-300 rounded font-mono text-sm">Space</kbd>
                    <span>הפעלת כפתור או גלילה למטה</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <kbd className="px-3 py-1 bg-white border-2 border-gray-300 rounded font-mono text-sm">Esc</kbd>
                    <span>סגירת תפריטים או חלונות קופצים</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <kbd className="px-3 py-1 bg-white border-2 border-gray-300 rounded font-mono text-sm">↑ ↓ ← →</kbd>
                    <span>ניווט בתפריטים ורשימות</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. שיפורים ותיקונים מתמשכים
              </h2>
              <p className="mb-4">
                אנו פועלים באופן מתמיד לשיפור הנגישות באתר ומבצעים:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>בדיקות נגישות אוטומטיות וידניות באופן קבוע</li>
                <li>עדכוני תוכן ותיקוני באגים בעקבות משוב משתמשים</li>
                <li>עדכון לתקנים ולטכנולוגיות נגישות עדכניות</li>
                <li>הדרכת צוות פיתוח ותוכן בנושא נגישות</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. פניות ותלונות
              </h2>
              <p className="mb-4">
                אם נתקלת בבעיית נגישות באתר, אנא פנה אלינו ונעשה כמיטב יכולתנו לסייע:
              </p>
              <div className="bg-primary-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li>
                    <strong className="font-bold">רכז נגישות:</strong> שלומי לוי
                  </li>
                  <li>
                    <strong className="font-bold">טלפון:</strong> 050-1234567
                  </li>
                  <li>
                    <strong className="font-bold">אימייל:</strong>{' '}
                    <a
                      href="mailto:accessibility@carpentry.co.il"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      accessibility@carpentry.co.il
                    </a>
                  </li>
                  <li>
                    <strong className="font-bold">WhatsApp:</strong>{' '}
                    <a
                      href="https://wa.me/972525090556"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      052-509-0556
                    </a>
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                נשתדל להגיב לפניות תוך 5 ימי עסקים ולטפל בבעיה בהקדם האפשרי.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. מידע נוסף על נגישות
              </h2>
              <p className="mb-4">למידע נוסף על נגישות באתרי אינטרנט:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>
                  <a
                    href="https://www.gov.il/he/departments/topics/digital_accessibility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    נגישות דיגיטלית - אתר משרד המשפטים
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3.org/WAI/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    Web Accessibility Initiative (WAI)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.isoc.org.il/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    האגודה הישראלית לאינטרנט
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-purple-50 to-primary-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4 font-medium">
                אנו מאמינים בנגישות לכולם. בוא ניצור יחד משהו מיוחד
              </p>
              <Link
                href="/boards/custom-cut"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                התחל לעצב עכשיו
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

