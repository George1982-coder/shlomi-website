import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'תנאי שימוש | נגרות מותאמת אישית',
  description: 'תנאי שימוש והתקנון לשימוש באתר - כל מה שצריך לדעת על הזמנת מוצרים ופתרונות נגרות',
};

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            תנאי שימוש
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. כללי
              </h2>
              <p className="mb-4">
                ברוכים הבאים לאתר נגריית האינטרנט. השימוש באתר זה כפוף לתנאי השימוש המפורטים להלן.
                המשך הגלישה והשימוש באתר מהווה הסכמה מלאה לתנאים אלו.
              </p>
              <p>
                תנאי השימוש חלים על כל משתמשי האתר, לרבות גולשים, לקוחות ומשתמשים רשומים.
                אנו שומרים לעצמנו את הזכות לעדכן ולשנות תנאים אלו בכל עת.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. שירותי האתר
              </h2>
              <p className="mb-4">
                האתר מספק שירותי תכנון והזמנה של מוצרי נגרות מותאמים אישית, לרבות:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>חיתוך לוחות עץ לפי מידות אישיות</li>
                <li>הזמנת ארונות ומדפים מותאמים</li>
                <li>תכנון פתרונות אחסון</li>
                <li>ייעוץ מקצועי ותמיכה טכנית</li>
                <li>משלוח והתקנה (בכפוף לאזור המגורים)</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. הזמנות ותשלומים
              </h2>
              <p className="mb-4">
                <strong className="font-bold">3.1 ביצוע הזמנה:</strong> בעת ביצוע הזמנה באתר, הלקוח מתחייב למסור פרטים מדויקים 
                ומלאים לצורך עיבוד ההזמנה והמשלוח.
              </p>
              <p className="mb-4">
                <strong className="font-bold">3.2 אישור הזמנה:</strong> לאחר ביצוע ההזמנה, תישלח הודעת אישור למייל. 
                אישור ההזמנה כפוף לזמינות המוצרים ולאישור התשלום.
              </p>
              <p className="mb-4">
                <strong className="font-bold">3.3 תשלום:</strong> התשלום מתבצע דרך מערכת תשלומים מאובטחת. 
                אנו מקבלים כרטיסי אשראי, העברה בנקאית ותשלום במזומן (בתיאום מראש).
              </p>
              <p>
                <strong className="font-bold">3.4 מחירים:</strong> המחירים המוצגים באתר כוללים מע"מ אך אינם כוללים דמי משלוח 
                (אלא אם צוין אחרת). אנו שומרים את הזכות לשנות מחירים ללא הודעה מוקדמת.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. ביטולים והחזרות
              </h2>
              <p className="mb-4">
                <strong className="font-bold">4.1 ביטול הזמנה:</strong> ניתן לבטל הזמנה תוך 14 יום ממועד ההזמנה, 
                בכפוף לכך שהייצור טרם החל. מוצרים מותאמים אישית שייצורם החל אינם ניתנים לביטול.
              </p>
              <p className="mb-4">
                <strong className="font-bold">4.2 החזרת מוצרים:</strong> מוצרים סטנדרטיים (לא מותאמים אישית) ניתנים להחזרה 
                תוך 14 יום, בכפוף לכך שהמוצר במצב חדש ובאריזתו המקורית.
              </p>
              <p>
                <strong className="font-bold">4.3 החזר כספי:</strong> החזר כספי יבוצע תוך 14 ימי עסקים מיום קבלת המוצר החוזר.
                דמי משלוח לא יוחזרו.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. משלוחים
              </h2>
              <p className="mb-4">
                <strong className="font-bold">5.1 זמני אספקה:</strong> זמני האספקה המוצגים באתר הם משוערים בלבד ואינם מהווים 
                התחייבות. נעשה כל מאמץ לספק את ההזמנות במועד.
              </p>
              <p className="mb-4">
                <strong className="font-bold">5.2 אזורי משלוח:</strong> אנו מספקים משלוחים לכל רחבי הארץ. 
                דמי המשלוח משתנים בהתאם למרחק ולגודל ההזמנה.
              </p>
              <p>
                <strong className="font-bold">5.3 בדיקת מוצרים:</strong> הלקוח מתבקש לבדוק את המוצר עם הגעת המשלוח 
                ולדווח על כל נזק או אי התאמה באופן מיידי.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. אחריות ואחריות מוגבלת
              </h2>
              <p className="mb-4">
                אנו מעניקים אחריות על איכות העבודה והחומרים למשך שנה ממועד האספקה. 
                האחריות אינה חלה על נזקים שנגרמו כתוצאה משימוש לא נכון, תאונה או בלאי טבעי.
              </p>
              <p>
                המידות והפרטים הטכניים מבוססים על המידע שסיפק הלקוח. 
                אנו לא נישא באחריות לאי התאמות הנובעות ממידע שגוי שנמסר על ידי הלקוח.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. קניין רוחני
              </h2>
              <p>
                כל התכנים באתר זה, לרבות טקסטים, תמונות, לוגו, גרפיקה ועיצובים, הם בבעלות נגריית האינטרנט 
                או מורשים לשימוש על ידה. אין להעתיק, להפיץ או לעשות שימוש מסחרי בתכנים אלו ללא אישור בכתב.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. הגבלת אחריות
              </h2>
              <p>
                האתר והשירותים ניתנים "כמות שהם". אנו לא נישא באחריות לנזקים ישירים, עקיפים, 
                מקריים או תוצאתיים הנובעים מהשימוש באתר או מאי היכולת להשתמש בו, 
                לרבות (אך לא רק) נזקים כתוצאה מאובדן נתונים, הפסד רווח או הפרעה לעסק.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. דין וסמכות שיפוט
              </h2>
              <p>
                תנאי שימוש אלו כפופים לחוקי מדינת ישראל. סמכות השיפוט הבלעדית בכל עניין הנוגע לתנאי שימוש אלו 
                נתונה לבתי המשפט המוסמכים במחוז תל אביב.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. יצירת קשר
              </h2>
              <p className="mb-4">
                לשאלות, בירורים או תלונות בנוגע לתנאי השימוש, ניתן ליצור קשר:
              </p>
              <ul className="space-y-2">
                <li><strong>טלפון:</strong> 050-1234567</li>
                <li><strong>אימייל:</strong> info@carpentry.co.il</li>
                <li>
                  <strong>WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/972525090556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium underline"
                  >
                    052-509-0556
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                קראת את תנאי השימוש? מעולה! עכשיו בוא נתחיל לעצב את הרהיט המושלם עבורך
              </p>
              <Link
                href="/boards/custom-cut"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
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

