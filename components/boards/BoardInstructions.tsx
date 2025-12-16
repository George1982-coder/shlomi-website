'use client';

export default function BoardInstructions() {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-500">
            איך לבצע הזמנה?
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-primary-700">שלב 1:</strong> הזינו את המידות המדויקות של הלוח 
              הרצוי בשדות הרוחב והאורך. שימו לב שהמידות הן בסנטימטרים.
            </p>
            <p>
              <strong className="text-primary-700">שלב 2:</strong> בחרו את סוג הלוח המתאים - מלמין, 
              MDF או עץ מלא, בהתאם לשימוש המתוכנן.
            </p>
            <p>
              <strong className="text-primary-700">שלב 3:</strong> בחרו את חומר הבסיס והעיבוי הרצוי. 
              כל חומר מתאים לשימושים שונים - ניתן לקבל ייעוץ בווטסאפ.
            </p>
            <p>
              <strong className="text-primary-700">שלב 4:</strong> בחרו צבע או גוון גימור מהמגוון הזמין. 
              שימו לב שהצבעים באתר הם ייצוג משוער.
            </p>
            <p>
              <strong className="text-primary-700">שלב 5:</strong> בחרו את מיקום הקנטים - האם תרצו קנט 
              בכל ההיקף, בצדדים מסוימים, או ללא קנט כלל.
            </p>
            <p>
              <strong className="text-primary-700">שלב 6:</strong> לחצו על כפתור "הוסף לסל" או צרו קשר 
              ישיר בווטסאפ לקבלת ייעוץ נוסף.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-accent-500">
            איך מודדים את הלוח?
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              מדידה נכונה היא המפתח לקבלת לוח מושלם. חשוב למדוד בדיוק את המרחב בו הלוח 
              יותקן, תוך התחשבות בכל הגורמים הרלוונטיים.
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>השתמשו במטר מדידה איכותי ומדויק</li>
              <li>מדדו מספר פעמים לוודא את הדיוק</li>
              <li>קחו בחשבון מרווחים נדרשים להתקנה</li>
              <li>רשמו את המידות בצורה ברורה</li>
              <li>במקרה של ספק - תמיד עדיף למדוד שוב</li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-500">
            מדידת האורך
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              האורך הוא המידה הארוכה יותר של הלוח. בעת מדידת האורך, חשוב לקחת בחשבון את 
              כיוון הסיבים (במקרה של לוחות עץ) ואת כיוון ההתקנה המתוכנן.
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>מדדו את המרחק המלא מקצה לקצה</li>
              <li>וודאו שהמטר ישר ולא מעוקם</li>
              <li>במקרה של התקנה בין קירות - הפחיתו 2-3 מ"מ להקלת ההתקנה</li>
              <li>רשמו את המידה בסנטימטרים מדויקים</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-accent-500">
            מדידת הרוחב / עומק
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              הרוחב (או העומק במקרה של מדפים) הוא המידה הקצרה יותר. מדידה נכונה של הרוחב 
              חיונית במיוחד במקרים בהם הלוח צריך להתאים למרחב קיים.
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>מדדו את המרחב במספר נקודות - תחילה, אמצע וסוף</li>
              <li>קחו את המידה הקטנה ביותר אם יש הבדלים</li>
              <li>במדפים - קחו בחשבון את עומק הפרופיל/מסילה</li>
              <li>ודאו שיש מספיק מרווח לפתיחת דלתות או מגירות</li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-500">
            טיפים למדידה מדויקת
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              כמה טיפים חשובים שיעזרו לכם לקבל תוצאה מושלמת:
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>
                <strong>תמיד מדדו פעמיים:</strong> מדידה כפולה מבטיחה דיוק ומונעת טעויות יקרות
              </li>
              <li>
                <strong>קחו בחשבון קנטים:</strong> אם בוחרים קנט, הוא מוסיף כ-1-2 מ"מ למידה הכוללת
              </li>
              <li>
                <strong>חשבו על התפשטות:</strong> חומרים מסוימים מגיבים ללחות - השאירו מרווח קטן
              </li>
              <li>
                <strong>צרו קשר במקרה של ספק:</strong> אנחנו כאן כדי לעזור - אל תהססו לשאול
              </li>
              <li>
                <strong>שמרו רשימה:</strong> רשמו את כל המידות בצורה מסודרת עם תיאור המיקום
              </li>
              <li>
                <strong>בדקו זוויות:</strong> ודאו שהזוויות של המרחב הן 90 מעלות או קחו זאת בחשבון
              </li>
            </ul>
            <div className="mt-6 p-5 bg-gradient-to-l from-primary-50 to-accent-50 rounded-lg border-r-4 border-primary-500">
              <p className="font-semibold text-gray-900 mb-2">
                💡 זקוקים לעזרה בתכנון או במדידה?
              </p>
              <p className="text-gray-700">
                צוות המומחים שלנו זמין לייעוץ חינם בווטסאפ. אנחנו נשמח לעזור לכם למדוד נכון, 
                לבחור את החומר המתאים, ולתכנן את הפתרון המושלם לצרכים שלכם.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

