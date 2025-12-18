import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Lock, Eye, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | נגרות מותאמת אישית',
  description: 'מדיניות הפרטיות שלנו - כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך',
};

export default function PrivacyPage() {
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
            <div className="p-3 bg-primary-100 rounded-full">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              מדיניות פרטיות
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Lock className="w-6 h-6 text-green-600" />
              <span className="font-medium text-gray-700">הצפנה מלאה</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-gray-700">נתונים מאובטחים</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <UserCheck className="w-6 h-6 text-purple-600" />
              <span className="font-medium text-gray-700">שקיפות מלאה</span>
            </div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary-600" />
                1. מבוא
              </h2>
              <p className="mb-4">
                ברוכים הבאים למדיניות הפרטיות של נגריית האינטרנט. אנו מכבדים את פרטיותך ומתחייבים להגן על המידע 
                האישי שלך. מדיניות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם וכיצד אנו שומרים עליהם.
              </p>
              <p>
                השימוש באתר מהווה הסכמה למדיניות פרטיות זו. אם אינך מסכים לתנאים המפורטים כאן, 
                אנא הימנע משימוש באתר.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. איזה מידע אנו אוספים?
              </h2>
              <p className="mb-4">
                אנו אוספים סוגים שונים של מידע במטרה לספק ולשפר את השירותים שלנו:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2.1 מידע שאתה מספק לנו
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li><strong>פרטי הזדהות:</strong> שם מלא, כתובת דוא"ל, מספר טלפון</li>
                  <li><strong>פרטי משלוח:</strong> כתובת מלאה, עיר, מיקוד</li>
                  <li><strong>פרטי תשלום:</strong> פרטי כרטיס אשראי (מאובטחים דרך ספק תשלומים חיצוני)</li>
                  <li><strong>פרטי הזמנה:</strong> מידות, מפרטים טכניים, העדפות עיצוב</li>
                  <li><strong>תכתובת:</strong> הודעות ששלחת אלינו דרך טפסי יצירת קשר או WhatsApp</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2.2 מידע שנאסף אוטומטית
                </h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li><strong>נתוני גלישה:</strong> דפים שביקרת, זמן שהייה, לחיצות</li>
                  <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, גודל מסך</li>
                  <li><strong>Cookies:</strong> קבצי עוגיות לשיפור חוויית השימוש</li>
                  <li><strong>מידע ממכשירים ניידים:</strong> מודל מכשיר, גרסת מערכת הפעלה</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. כיצד אנו משתמשים במידע?
              </h2>
              <p className="mb-4">אנו משתמשים במידע שנאסף למטרות הבאות:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>עיבוד הזמנות:</strong> לניהול ההזמנות, ייצור המוצרים ומשלוחם</li>
                <li><strong>שירות לקוחות:</strong> למענה לפניות, מתן תמיכה וטיפול בתלונות</li>
                <li><strong>שיפור השירות:</strong> לניתוח התנהגות משתמשים ושיפור האתר</li>
                <li><strong>תקשורת שיווקית:</strong> שליחת הצעות, מבצעים וחדשות (בכפוף להסכמתך)</li>
                <li><strong>אבטחה:</strong> זיהוי ומניעת פעילות הונאה או שימוש לרעה באתר</li>
                <li><strong>עמידה בחוק:</strong> עמידה בדרישות חוקיות ורגולטוריות</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. שיתוף מידע עם צדדים שלישיים
              </h2>
              <p className="mb-4">
                אנו <strong>לא מוכרים</strong> את המידע האישי שלך לצדדים שלישיים. עם זאת, אנו עשויים לשתף מידע במקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>ספקי שירותים:</strong> חברות משלוחים, מעבדי תשלומים, ספקי אחסון בענן (כולם פועלים תחת הסכמי סודיות)</li>
                <li><strong>דרישות חוקיות:</strong> כאשר החוק מחייב או לצורך הליכים משפטיים</li>
                <li><strong>הגנה על זכויות:</strong> כדי להגן על זכויותינו, בטיחות המשתמשים או הציבור</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. אבטחת מידע
              </h2>
              <p className="mb-4">
                אנו נוקטים באמצעי אבטחה מתקדמים כדי להגן על המידע שלך:
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">✓</div>
                    <span><strong>הצפנת SSL:</strong> כל התקשורת באתר מוצפנת באמצעות תעודת SSL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">✓</div>
                    <span><strong>אחסון מאובטח:</strong> שרתים מאובטחים עם גישה מוגבלת</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">✓</div>
                    <span><strong>גיבויים תקופתיים:</strong> גיבוי קבוע של כל הנתונים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">✓</div>
                    <span><strong>עדכוני אבטחה:</strong> עדכונים שוטפים של מערכות האבטחה</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookies (עוגיות)
              </h2>
              <p className="mb-4">
                האתר משתמש ב-Cookies לשיפור חוויית המשתמש. Cookies הם קבצי טקסט קטנים המאוחסנים במחשב שלך.
              </p>
              <p className="mb-4">
                <strong>סוגי Cookies שאנו משתמשים בהם:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>Cookies הכרחיים:</strong> נחוצים לתפקוד הבסיסי של האתר</li>
                <li><strong>Cookies תפקודיים:</strong> שומרים את העדפותיך (למשל, שפה)</li>
                <li><strong>Cookies אנליטיים:</strong> עוזרים לנו להבין כיצד המשתמשים גולשים באתר</li>
                <li><strong>Cookies שיווקיים:</strong> משמשים להצגת פרסומות רלוונטיות (בכפוף להסכמה)</li>
              </ul>
              <p className="mt-4">
                תוכל לחסום Cookies דרך הגדרות הדפדפן שלך, אך זה עשוי להשפיע על תפקוד האתר.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. הזכויות שלך
              </h2>
              <p className="mb-4">לפי חוק הגנת הפרטיות, יש לך מספר זכויות:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>זכות עיון:</strong> לדעת אילו נתונים אישיים שלך מוחזקים אצלנו</li>
                <li><strong>זכות תיקון:</strong> לבקש תיקון מידע שגוי או לא מדויק</li>
                <li><strong>זכות מחיקה:</strong> לבקש מחיקת הנתונים האישיים שלך</li>
                <li><strong>זכות התנגדות:</strong> להתנגד לעיבוד מסוים של הנתונים שלך</li>
                <li><strong>זכות להסרה משיווק:</strong> להסיר עצמך מרשימות תפוצה שיווקיות</li>
              </ul>
              <p className="mt-4">
                לממש את זכויותיך, צור קשר עמנו באמצעים המפורטים בסעיף "יצירת קשר" למטה.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. שמירת מידע
              </h2>
              <p>
                אנו שומרים את המידע האישי שלך כל עוד יש לך חשבון פעיל אצלנו, או כל עוד זה נחוץ לצורך מתן השירותים.
                לאחר מכן, נשמור את המידע למשך התקופה הנדרשת על פי חוק (לרבות לצרכי מיסוי, חשבונאות והתיישנות תביעות).
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. קטינים
              </h2>
              <p>
                האתר אינו מיועד לשימוש על ידי קטינים מתחת לגיל 18. אנו לא אוספים במודע מידע אישי מקטינים.
                אם הנך הורה או אפוטרופוס וגילית כי ילדך מסר לנו מידע אישי, אנא צור עמנו קשר ונמחק את המידע.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. שינויים במדיניות הפרטיות
              </h2>
              <p>
                אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר עם תאריך העדכון.
                המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה למדיניות המעודכנת.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. יצירת קשר
              </h2>
              <p className="mb-4">
                לשאלות, בירורים או בקשות בנוגע למדיניות הפרטיות או לנתונים האישיים שלך:
              </p>
              <div className="bg-primary-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">טלפון</div>
                      <div className="text-gray-700">050-1234567</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">אימייל</div>
                      <div className="text-gray-700">info@carpentry.co.il</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      💬
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">WhatsApp</div>
                      <a
                        href="https://wa.me/972525090556"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium underline"
                      >
                        052-509-0556
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4 font-medium">
                הפרטיות שלך חשובה לנו. מוכנים להתחיל?
              </p>
              <Link
                href="/boards/custom-cut"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                צור את המוצר שלך
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

